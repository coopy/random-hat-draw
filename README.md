Random Hat Draw
===============

[![Build Status](https://travis-ci.org/coopy/random-hat-draw.svg?branch=master)](https://travis-ci.org/coopy/random-hat-draw)

## Development workflow

Install dependenvies.

```sh
$ npm install
```

Run the app via webpack-dev-server, and file watching (no hot reloading):

```sh
$ npm start
```

Open http://localhost:3000

## Docker

Currently, there is a solution for running the node server in production mode with pre-built frontend bundle in a Docker image. For a normal development workflow, just use webpack-dev-server (`npm start`).


**TODO Docker for Development**:
- [ ] Read http://www.ybrikman.com/writing/2015/05/19/docker-osx-dev/
- [ ] Integrate https://github.com/brikis98/docker-osx-dev
- [ ] Update Docker scripts to enable a shared file system for watching

### Prerequisites

Install Docker. You can follow the "First steps" section of https://medium.com/@per/running-a-node-js-app-in-docker-1b9265303c9e#90bb

### Local

To run the node server in a Docker image on localhost:

1. Build the image:

        $ docker build -f Dockerfile.dev -t hat-draw-dev .

2. Run the image:

        $ docker run -it --rm -p 3000:3000 hat-draw

### Production continuous integration pipeline

**TODO**:

- [ ] Read http://blog.codeship.com/continuous-integration-and-delivery-with-docker/
- [ ] Configure https://codeship.com/projects/133976/setup_jet
  - [ ] Confgure services by adding a `codeship-services.yml` according to https://codeship.com/documentation/docker/services
  - [ ] Setup CD workflow by adding a `codeship-steps.yml` according to https://codeship.com/documentation/docker/steps

## Acknowledgements:

- Glorious hat illustration: [MisterAibo](http://misteraibo.deviantart.com/art/Vector-Hat-Tophat-298929165)
