---
title: "Managing multiple github accounts on your machine"
description: "All of us have and might go through this problem at some point in our careers where we've got..."
slug: "managing-multiple-github-account-on-your-machine-no2"
publishedAt: "2021-12-26T18:18:50.999Z"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fuw1rejnvdo7ufqiqmolj.png"
readingTime: 1
canonicalUrl: "https://www.navinkodag.com/blog/managing-multiple-github-account-on-your-machine-no2"
tags:
  - git
  - github
  - bash
  - versioncontrol
---


All of us have and might go through this problem at some point in our careers where we've got multiple github account for our personal, work and freelancing projects.

Before a couple of months ago I would used two variations of VS code in my machine. One was the [Visual Studio Code](https://code.visualstudio.com/) and other was [VScodium ](https://vscodium.com/).
But that was a work around until I found out that you can add your username and password/ Personal Auth Token when you clone the repo. After that you can start working normally and git will take care of permissions.
We need the Personal Auth Token because github has discountinued using our traditional passwords. And PATs can expire, they can also be given selective permissions.

So this is how it works, when you're cloning a repo just put your username:PAT 
example:
```bash
git clone https://{username}:{PAT}@github.com/{username/org}/{repo}
```

Yes, it was as simple as that.

You can find me at https://www.navinkodag.com
