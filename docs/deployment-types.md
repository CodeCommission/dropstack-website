# Deployment Types

* [Static](#static)
* [Node.js](#nodejs)
* [Docker](#docker)

## Deploying Static Apps<a id="static"></a><hr/>

DropStack comes with a native support for static deployments. It considers all projects that don't have a Dockerfile, nor a package.json as a static deployment.
Deploying such a static project is still as easy as running a single command:

```bash
$ dropstack deploy
```

## Deploying Node.js Apps<a id="nodejs"></a><hr/>

If your project contains a package.json (and no Dockerfile) file, it will always be treated as a Node.js deployment.
This means that, when you run `dropstack deploy`, your code will be launched into a 64-bit Node.js enviroment running on Alpine Linux (using musl instead of glibc for the core libraries).
In this document, you'll learn the exact specifications and behaviour of Node.js deployments running on DropStack.

## Deploying Docker Apps<a id="docker"></a><hr/>

If your project contains a Dockerfile file, it will always be treated as a Docker deployment.
This means that - when running `dropstack deploy` inside your terminal - your project will be launched into a secure Docker container on our platform, completely isolated from other customers and even your other containers.
In this document, you'll learn the exact specifications and behaviour of Docker deployments running on DropStack.