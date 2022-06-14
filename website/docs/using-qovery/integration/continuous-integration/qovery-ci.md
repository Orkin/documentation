---
last_modified_on: "2022-02-24"
title: "Qovery CI"
description: "Learn how to configure the Qovery CI"
---

The Qovery CI use your regular Dockerfile to build and test your application.

### Performance

You can tune the performance of your Qovery CI through the web interface. The main attributes that you can tune are:
- the number of **CPUs**. Default: 1 CPU
- the total **RAM**. Default: 2 GB

Which is enough for most applications.

### Instances

The number of Qovery CI instances is auto-scaled, depending on the number of tasks queued. The limit is to 50 Qovery CI instances per Kubernetes cluster. Each instance runs only a single "task" at the same time.



