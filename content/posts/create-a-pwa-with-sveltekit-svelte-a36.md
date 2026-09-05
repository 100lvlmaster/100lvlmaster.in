---
title: "Create a PWA with Sveltekit | Svelte"
description: "I've been using sveltekit and svelte for over a year now. I'm also waiting for it to be matured..."
slug: "create-a-pwa-with-sveltekit-svelte-a36"
publishedAt: "2021-06-27T21:33:27.146Z"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fc7gc0o4bwiv98o2oc0z4.png"
readingTime: 2
canonicalUrl: "https://www.navinkodag.com/blog/create-a-pwa-with-sveltekit-svelte-a36"
tags:
  - svelte
  - typescript
  - sveltekit
  - pwa
---


 I've been using sveltekit and svelte for over a year now. I'm also waiting for it to be matured enough to beat NextJs in terms of community. But I like them both.
 
 So, on this weekend I wanted to turn one of my SvelteKit projects into a PWA. When I wanted to do the same with NextJs projects there were a lot of tutorials. But I couldn't find many guides for svelte beginners.

   That's because svelte has pwa functionality built into it.
   
   

## Note !
### Basic things for all PWAs
 -  A website
 -  manifest.json [ basic icons,names,shortcuts]
 -  service-worker [ for offline cache ]


 So let's get on with it.
 
![lets-go.gif](https://media.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif)

## First:
We'll create a demo Sveltekit project:
```bash
npm init svelte@next my-app
```

![create.png](https://imgur.com/LIfwJFA.png)

Then we'll choose a simple config in vite for the sake of this article:

![config.png](https://imgur.com/uyTDDVf.png)

Choose typescript because `#typescriptgang`:

![svelte-kit-config.png](https://imgur.com/VePlaaP.png)


Now we have a demo project set up with typescript, it will be straight-forward from here on:

![note.png](https://imgur.com/gZLK7Jh.png)

Let's get into our directory:
```bash
cd my-app
```
And run:
```bash
yarn
```
![yarn-output.png](https://imgur.com/v5RgR26.png)

After that,
- In the /static directory, We'll create a manifest.json.
- When svelte compiles the whole application, it copies static files over to the build folder.

![manifest.json](https://imgur.com/WokCIZk.png)

{% gist https://gist.github.com/100lvlmaster/3a7d37a400897114d5c64d88b81e4acc %}

Then we'll refer our `manifest.json` in `src/app.html`.

![app.html](https://imgur.com/s43YGuD.png)

And finally we'll create our `src/service-worker.ts`

_Svelte will automatically detect the service-worker in the src folder's root and then register our service worker during build_.
_Isn't that neat?_

![service-worker.ts](https://imgur.com/0aLDOHU.png)


{% gist https://gist.github.com/100lvlmaster/8e966302b2e03404203e965424cb2bca %}

Now we just need to build our app using `yarn build`:
![build.png](https://imgur.com/PjkpOEy.png)

Now we can preview our build using `yarn preview`:

![preview.png](https://imgur.com/GCYjrnL.png)

😯 thats the _'install app'_ button,

![output-button.png](https://imgur.com/jtwLSiw.png)

Svelte makes it easy to make PWAs.

The source code of this project lies at:

https://github.com/100lvlmaster/svelte-pwa

You can find me at:

https://www.navinkodag.com
