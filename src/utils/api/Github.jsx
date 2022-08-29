const Github = {
  username: "lego-build",
  repo: "community",
  branch: "master",
  async getWorkflows() {
    let response = await fetch(
      `https://api.github.com/repos/${this.username}/${this.repo}/git/trees/${this.branch}?recursive=true`
    );
    response = await response.json();

    response = response.tree.filter((file) =>
      file.path.endsWith("description.json")
    );

    let result = [];

    for (let i = 0; i < response.length; i++) {
      const { path } = response[i];
      const descriptionBlob = await fetch(
        `https://raw.githubusercontent.com/${this.username}/${this.repo}/${this.branch}/${path}`
      );
      const description = await descriptionBlob.json();
      result.push({ ...description, id: path.split("/")[1] });
    }

    console.log(result);

    return result;
  },
};

export default Github;
