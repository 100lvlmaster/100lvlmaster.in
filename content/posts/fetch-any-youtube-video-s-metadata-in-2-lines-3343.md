---
title: "Fetch any YouTube video’s metadata in 2 lines"
description: "So, i was looking for a way to quickly get a YouTube video’s metadata without having to setup the dev..."
slug: "fetch-any-youtube-video-s-metadata-in-2-lines-3343"
publishedAt: "2021-05-09T23:08:50.457Z"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fn3wl25mjz5bmcoyxde17.jpeg"
readingTime: 1
canonicalUrl: "https://www.navinkodag.com/blog/fetch-any-youtube-video-s-metadata-in-2-lines-3343"
---


So, i was looking for a way to quickly get a YouTube video’s metadata without having to setup the developer account and get an API key since i just needed to integrate it as one small feature.

After doing a quick Google search, I came across the oembed API to fetch metadata for any video with using its link. So it goes like dis

tldr:
{% gist https://gist.github.com/100lvlmaster/37e26620fe9329597168e2a6188da8ce.js %}
But after a bit of refactoring 🧹…
{% gist https://gist.github.com/100lvlmaster/3dd10cc6940917706a07e971ed3305b7.js %}
The basic HTTP request looks like this…

    [http://youtube.com/oembed?url=${YOUR](http://youtube.com/oembed?url=${YOUR)_VIDEO_URL}&format=json

Gives us a response like this…

    **{
    **"title": "Rick Astley - Never Gonna Give You Up (Video)",
    "author_name": "RickAstleyVEVO",
    "author_url": "[https://www.youtube.com/user/RickAstleyVEVO](https://www.youtube.com/user/RickAstleyVEVO)",
    "type": "video",
    "height": **113**,
    "width": **200**,
    "version": "1.0",
    "provider_name": "YouTube",
    "provider_url": "[https://www.youtube.com/](https://www.youtube.com/)",
    "thumbnail_height": **360**,
    "thumbnail_width": **480**,
    "thumbnail_url": "[https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg](https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg)",
    "html": "<iframe width=\"200\" height=\"113\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
    **}**

That’s pretty neat :]
[**navinko**](https://navinko.netlify.app)
