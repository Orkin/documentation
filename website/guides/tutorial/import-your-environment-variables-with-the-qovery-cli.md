---
last_modified_on: "2022-12-23"
$schema: "/.meta/.schemas/guides.json"
title: Import your environment variables with the Qovery CLI
description: How to import your environment variables and secrets from your dotenv file with the Qovery CLI
author_github: https://github.com/evoxmusic
tags: ["type: tutorial", "technology: qovery"]
hide_pagination: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Alert from '@site/src/components/Alert';
import Assumptions from '@site/src/components/Assumptions';
import Jump from '@site/src/components/Jump';

<Alert type="info">

The Qovery Web Interface support `.env` (dot env) file import now. [Check out the documentation][docs.using-qovery.configuration.environment-variable#import-environment-variables]

</Alert>

When dealing with dozens of environment variables, it can be tedious to import them one by one. This is where the Qovery CLI with the env vars import feature helps. In this tutorial, you will learn how to import your environment variables and secrets via the Qovery CLI.

<Assumptions>

- Your dotenv (`.env`) file is [compliant to the following specs](https://smartmob-rfc.readthedocs.io/en/latest/2-dotenv.html)
- You have created your application in Qovery

</Assumptions>

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/guides/tutorial/import-your-environment-variables-with-the-qovery-cli.md.erb
-->

## Install Qovery CLI

<Tabs
  centered={true}
  className={"rounded"}
  defaultValue={"linux"}
  placeholder="Select your OS"
  select={false}
  size={null}
  values={[{"group":"Platforms","label":"Linux","value":"linux"},{"group":"Platforms","label":"MacOS","value":"macos"},{"group":"Platforms","label":"Windows","value":"windows"}]}>

<TabItem value="linux">

<Tabs
  centered={true}
  className="rounded"
  defaultValue="universal"
  values={[{"label":"*nix","value":"universal"},{"label":"Arch Linux","value":"arch"},{"label":"Manual","value":"manual"}]}>

<TabItem value="universal">

To download and install Qovery CLI on any Linux distribution:
```bash
$ curl -s https://get.qovery.com | bash
```

</TabItem>
<TabItem value="arch">

Qovery is part of [AUR](https://aur.archlinux.org/packages) packages, so you can install it with [yay](https://github.com/Jguer/yay):

```bash
$ yay qovery-cli
```

</TabItem>
<TabItem value="manual">

Install the Qovery CLI on Linux manually by downloading the [latest realease][urls.qovery_cli_releases], and uncompress its content to a folder into your shell `PATH`.

</TabItem>
</Tabs>
</TabItem>

<TabItem value="macos">

<Tabs
  centered={true}
  className="rounded"
  defaultValue="homebrew"
  values={[{"label":"Homebrew","value":"homebrew"},{"label":"Script","value":"script"},{"label":"Manual","value":"manual"}]}>

<TabItem value="homebrew">

The common solution to install a command line binary on the MacOS is to use [Homebrew][urls.brew].

```bash
# Add Qovery brew repository
$ brew tap Qovery/qovery-cli

# Install the CLI
$ brew install qovery-cli
```

</TabItem>

<TabItem value="script">

To download and install Qovery CLI from the command line:
```bash
$ curl -s https://get.qovery.com | bash
```

</TabItem>

<TabItem value="manual">

Install the Qovery CLI on Mac OS manually by downloading the [latest realease][urls.qovery_cli_releases], and uncompress its content to a folder into your shell `PATH`.

</TabItem>

</Tabs>

</TabItem>

<TabItem value="windows">

<Tabs
  centered={true}
  className="rounded"
  defaultValue="scoop"
  values={[{"label":"Scoop","value":"scoop"},{"label":"Manual","value":"manual"}]}>

<TabItem value="scoop">

The classic way to install binaries on Windows is to use [Scoop][urls.scoop].

```bash
# Add Qovery bucket
$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli

# Install the CLI
$ scoop install qovery-cli
```

</TabItem>

<TabItem value="manual">

Install the Qovery CLI on Windows manually by downloading the [latest realease][urls.qovery_cli_releases], and uncompress its content to
`C:\Windows`.

</TabItem>

</Tabs>

</TabItem>

</Tabs>

## Set your context

Once you are authenticated with `qovery auth`, you must choose the application where you want to set the environment variables with the command `qovery context set`.

```bash title="connect to qovery"
$ qovery auth
```

```bash title="set the context"
~/Desktop $ qovery context set
Qovery: Current context:
Organization | Qovery Community
Project      | posthog
Environment  | prod
Application  | proxy

Qovery: Select new context
Organization:
✔ Qovery Realm
Project:
✔ Posthog
Environment:
✔ prod
Application:
✔ nginx-proxy

Qovery: New context:
Organization | Qovery Realm
Project      | Posthog
Environment  | prod
Application  | nginx-proxy
```

## Import

With Qovery, you make the distinction between Environment Variables and Secrets. Basically, the value of a Secret is encrypted and cannot be revealed.

Let's say that we have the following dotenv file `.env.development` that we want to import:

```text title=.env.development
STRAPI_API_KEY=x.xxyyyzzz
COLOR_BACKGROUND=fff
AUTH0_API_KEY_SECRET=0xb33f
API_URL=https://api.mytld.com
```

The `STRAPI_API_KEY` and `AUTH0_API_KEY_SECRET` are Secrets. `COLOR_BACKGROUND` and `API_URL` are Environment Variables.

### Environment Variables

<Alert type="info">

[Check out the documentation][docs.using-qovery.configuration.environment-variable] to learn more on how Environment Variables works.

</Alert>

To import the Environment Variables from this file we run the command `qovery env import <dotenv file>` and we select the environment variables to import:

```bash
$ qovery env import .env.development

Qovery: dot env file to import: '.env.development'
? Do you want to import Environment Variables or Secrets? Environment Variables
? What environment variables do you want to import?  [Use arrows to move, space to select, <right> to all, <left> to none, type to filter]
  [x]  COLOR_BACKGROUND=fff
  [ ]  AUTH0_API_KEY_SECRET=0xb33f
> [x]  API_URL=https://api.mytld.com
  [ ]  STRAPI_API_KEY=x.xxyyyzzz
```

Once validated you will see the following import validation:

```bash
? What environment variables do you want to import? COLOR_BACKGROUND=fff, API_URL=https://api.mytld.com
Qovery: ✅ Environment Variables successfully imported!
```

If during the import something goes wrong, you will see the errors and why it failed.

### Secrets

<Alert type="info">

[Check out the documentation][docs.using-qovery.configuration.environment-variable] to learn more on how Secrets works.

</Alert>

To import the Secrets, you need to run the same command `qovery env import <dotenv file>` and select the secrets to import.

```bash
$ qovery env import .env.development

Qovery: dot env file to import: '.env.development'
? Do you want to import Environment Variables or Secrets? Secrets
? What environment variables do you want to import?  [Use arrows to move, space to select, <right> to all, <left> to none, type to filter]
  [ ]  COLOR_BACKGROUND=fff
  [x]  AUTH0_API_KEY_SECRET=0xb33f
  [ ]  API_URL=https://api.mytld.com
> [x]  STRAPI_API_KEY=x.xxyyyzzz
```

Once validated you will see the following import validation:

```bash
? What environment variables do you want to import? STRAPI_API_KEY=x.xxyyyzzz, AUTH0_API_KEY_SECRET=0xb33
Qovery: ✅ Secrets successfully imported!
```

## Check

Open your environment variables console to check that everything has been set correctly.


[docs.using-qovery.configuration.environment-variable#import-environment-variables]: /docs/using-qovery/configuration/environment-variable/#import-environment-variables
[docs.using-qovery.configuration.environment-variable]: /docs/using-qovery/configuration/environment-variable/
[urls.brew]: https://brew.sh/
[urls.qovery_cli_releases]: https://github.com/Qovery/qovery-cli/releases
[urls.scoop]: https://scoop.sh/
