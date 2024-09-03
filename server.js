const express = require('express');
const Docker = require('dockerode');

// const DockerApi = require('./docker-api');
// const dockerApi = new DockerApi('/var/run/docker.sock');

const app = express();
const port = 3000;

const docker = new Docker({ socketPath: '/var/run/docker.sock' });

app.get('/', (req, res) => {
  docker.listImages((err, results) => {
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
