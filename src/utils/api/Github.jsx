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

    let result = [];

    for (let i = 0; i < tree.length; i++) {
      const { path } = tree[i];
      const descriptionBlob = await fetch(
        `https://raw.githubusercontent.com/${this.username}/${this.repo}/${this.branch}/${path}`
      );
      const description = await descriptionBlob.json();
      result.push({ ...description, id: path.split("/")[1] });
    }

    return result;
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
