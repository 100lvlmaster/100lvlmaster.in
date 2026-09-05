---
title: "Deploying Golang API to Heroku"
description: "Deploying a Go API on Heroku            To deploy it on Heroku.   I'll assume you have Herok..."
slug: "deploying-golang-api-to-heroku-2mnh"
publishedAt: "2021-06-09T21:24:23.933Z"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fyepp17gru8daeylgvgwc.png"
readingTime: 1
canonicalUrl: "https://www.navinkodag.com/blog/deploying-golang-api-to-heroku-2mnh"
tags:
  - heroku
  - go
  - api
  - rest
---

## Deploying a Go API on Heroku

## To deploy it on Heroku.

I'll assume you have Heroku cli installed and logged in.
or you can start here.
[Install heroku cli](https://devcenter.heroku.com/articles/heroku-cli)

- Create a Procfile that points to our binary with one line
  and place it in the root of the directory

```
// Profile
web: bin/Intersect_api
```

- Run the app locally to test using

```
heroku local
```

- Create a heroku app

```
heroku create intersect-api-v2
```

- Then commit our changes on git

```
git add .
git commit -m '💪'
```

- And at the end, simply deploy our app using

```
git push heroku heroku-deploy:master
```

- (Optional) Subsequent change can be commit using

```
git push heroku master
```

Extra

- You can read the logs from with

```
heroku logs
```

That's about it.
Now we can check our server at,

https://intersect-api-v2.herokuapp.com
