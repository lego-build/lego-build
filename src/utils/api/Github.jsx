const Github = {
  username: "lego-build",
  repo: "community",
  branch: "master",
  async getWorkflows() {
    let response = await fetch(
      `https://api.github.com/repos/${this.username}/${this.repo}/git/trees/${this.branch}?recursive=true`
    );
    let { tree } = await response.json();
    tree = tree.filter((file) => file.path.endsWith("description.json"));

    let results = [];
    let promises = [];

    for (let i = 0; i < tree.length; i++) {
      const { path } = tree[i];
      const id = path.split("/")[1];
      const descriptionPromise = this.fetchDescription(
        `https://raw.githubusercontent.com/${this.username}/${this.repo}/${this.branch}/${path}`,
        id
      );
      promises.push(descriptionPromise);
    }

    results = await Promise.all(promises);

    return results;
  },

  fetchDescription(url, id) {
    return new Promise((resolve, _) => {
      fetch(url)
        .then((descriptionBlob) => descriptionBlob.json())
        .then((descriptionJSON) => resolve({ ...descriptionJSON, id }));
    });
  },

  async getJSON(workflowName) {
    const jsonBlob = await fetch(
      `https://raw.githubusercontent.com/${this.username}/${this.repo}/${this.branch}/workflows/${workflowName}/lego.json`
    );
    const json = await jsonBlob.text();

    return json;
  },

  getDownloadUrl(path) {
    return `https://raw.githubusercontent.com/${this.username}/${this.repo}/${this.branch}/workflows/${path}`;
  },
};

export default Github;
