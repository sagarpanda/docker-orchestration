const { execSync } = require('child_process');

class DockerApi {
  constructor(socketPath) {
    this.curl = `curl --unix-socket ${socketPath}`;
  }
  getRequest(url) {
    const stdout = execSync(`${this.curl} ${url}`);
    const data = JSON.parse(stdout.toString());
    return data;
  }
  postRequest(url, payload) {
    const header = `-H "Content-Type: application/json"`;
    const postData = `-d ${JSON.stringify(payload)}`;
    const postUrl = `-X POST ${url}`;
    const stdout = execSync(`${this.curl} ${header} ${postData} ${postUrl}`);
    const data = JSON.parse(stdout.toString());
    return data;
  }
  getImages() {
    const data = this.getRequest('http://localhost/images/json');
    return data;
  }
}

module.exports = DockerApi;
