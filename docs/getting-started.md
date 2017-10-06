# Getting Started

With DropStack, you can deploy and publish any kind of web app (or service) in under five minutes. This guide includes information about:

* [Five Minutes Guide](#five-minutes-guide)
  * Deploying an app
  * Mapping a custom domain name to the app
  * Configuring an custom SSL certificate to the app
* [Deployments](#deployments)
* [Logs](#logs)

<a id="five-minutes-guide">&nbsp;</a>
## Five Minutes Guide
<hr/>

### DropStack CLI

If you've already installed Node.js, you can run the following command to install the CLI:

```bash
$ npm install -g dropstack-cli
```

For more information on DropStack CLI, run the help command with:

```bash
$ dropstack help
```

### Login to DropStack

When the installation is completed, you can log in to DropStack by running the following command using a terminal:

```bash
$ dropstack login
```

Follow the instructions on the screen. (Since this is your first time, it will create an account for you.)

### Deploy a static web app

Let's deploy a simple static web app. Create a directory called `my-web-app` and add the following content to a file called `index.html`.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Web App</title>
  <body>
    This is a static web app.
  </body>
</html>
```

> You can also use a Node.js app or an app with a Dockerfile instead of this simple static app.

After you have added the content, visit the `my-web-app` directory using a terminal and run this command:

```bash
$ dropstack deploy
```

DropStack will deploy the app and give you a URL as shown below.

### Mapping a custom domain name

Now you have a unique URL (https://avvuiuuwto.cloud.dropstack.run) for your app. But you probably want a nicer-sounding URL before directing your users there. The next step is to map the "cloud.dropstack.run" URL to a domain name that you prefer. Let's assume the domain name is `my-web-app.com`, and you haven't bought it yet.  To map this domain name to the app's unique URL, run this command:

```bash
$ dropstack domain avvuiuuwto -url my-web-app.com
```

### Update the app

If you've made any changes to your app, you will need to deploy the latest version of your app. To do that, run this command:

```bash
$ dropstack deploy
```

<a id="deployments">&nbsp;</a>
## Deployments
<hr/>

With DropStack, you can deploy any kind of web app by using a single command. DropStack supports three types of deployments:

* Static - for static web apps
* Node.js - for Node.js apps
* Docker - for all other apps

We have special categories for static and Node.js deployments because they are the most common among the deployments we handle. But you can also use Docker to deploy static and Node.js apps.
Here is how each of these deployments work:

For more information on DropStack deploy, run the help command with:

```bash
$ dropstack help deploy
```

<a id="logs">&nbsp;</a>
## Logs
<hr/>

Logs are important because it allows you to see what's happening inside the app, especially when a crisis happens. DropStack keeps logs of all of your deployments and allows you to search them.

Let's have a look at how you can access logs.

### Via CLI

Accessing logs via the now CLI is simple as invoking this command:

```bash
$ dropstack logs avvuiuuwto
```

For more information on DropStack logs, run the help command with:

```bash
$ dropstack help logs
```

### Via Dashboard (Beta)

You can also access and search logs via your web dashboard at [https://dashboard.cloud.dropstack.run](https://dashboard.cloud.dropstack.run). Click any of your deployment URLs inside the dashboard and start searching logs. You may need to click the "Logs" link on the header (top right) to see logs.

<hr/><hr/>

These are just a few things you can do with DropStack. To learn more about DropStack, simply follow the rest of the docs.