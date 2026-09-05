---
title: "5chan API - Golang, GORM, Go-fiber"
description: "This is the continuation of the 5chan project.   Creating the backend:    Setup project and..."
slug: "5chan-api-golang-gorm-go-fiber-10gi"
publishedAt: "2021-09-18T14:27:26.677Z"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fs4yvzfhnp9kjvzhkbpsl.png"
readingTime: 4
canonicalUrl: "https://www.navinkodag.com/blog/5chan-api-golang-gorm-go-fiber-10gi"
tags:
  - go
  - gofiber
  - gorm
  - 5chan
---

## This is the continuation of the 5chan project.
Creating the backend:
 -  Setup project and download dependencies in one Ctrl+v-Ctrl-v :
 ```bash
 # Create the 5chan directory
 mkdir 5chan-go
 # Create main.go
 touch main.go
 # Init the go project 
 go mod init github.com/100lvlmaster/5chan-go
 # Get go-fiber
 go get github.com/gofiber/fiber/v2
 # Get GORM
 go get github.com/gofiber/fiber/v2 
 # Get air
 curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin
 # Setup air
 air -c .air.toml
 # Get godotenv to read env vars [optional]

 ```

 Create a directory structure like so:
 -  controllers 
	 -  posts.go
	 -  replies.go
 -  database
	 -  database.go
 -  middleware
	 -  middleware.go
 -  models
	 -  post.go
	 -  reply.go
 -  routes
	 -  routes.go
 - main.go
 
![dir-struct.png](https://imgur.com/q85U73P.png)



## Da Code:
- Creating structs

models/post.go
```go
// models/post.go
package models
import "gorm.io/gorm"

type Post struct {
gorm.Model
ID string `gorm:"primaryKey"`
Title string `json:"title"`
Author string `json:"author"`
Body string `json:"body"`
Reply []Reply `json:"replies" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
```
models/reply.go
```go
// models/reply.go
package models
import "gorm.io/gorm"

type Reply struct {
gorm.Model
ID string `gorm:"primaryKey"`
Author string `json:"author"`
Body string `json:"body"`
PostID string `json:"postId"`
Post Post `json:"post" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
```

- Connecting the databse and creating a singleton of the instance so we can use it everywhere.

```go
// database/database.go
package database
import (
"fmt"
"os"
"github.com/100lvlmaster/5chan-go/models"
"gorm.io/driver/postgres"
"gorm.io/gorm"
)

var (
// DBConn is a database connection singleton
DBConn *gorm.DB
)

func InitDb() *gorm.DB {
dsn, envExists := os.LookupEnv("DB_DSN")
if !envExists {
panic("Could not connect to the database")
}
db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
if err != nil {
panic("Could not initialize database")
}
migrate(db)
return db
}

func migrate(db *gorm.DB) {
err := db.AutoMigrate(&models.Post{}, &models.Reply{})
if err != nil {
fmt.Print("Could not init database")
return
}
fmt.Print("Database migrated")
}
```

- Creating Controllers

controllers/posts.go
```go
// controllers/posts.go
package controllers
import (
"github.com/100lvlmaster/5chan-go/database"
"github.com/100lvlmaster/5chan-go/models"
"github.com/gofiber/fiber/v2"
gonanoid "github.com/matoous/go-nanoid/v2"
)
  
func GetPosts(c *fiber.Ctx) error {
var posts []models.Post
database.DBConn.Find(&posts)
return c.JSON(posts)
}

func GetPostById(c *fiber.Ctx) error {
id := c.Params("id")
var post models.Post
database.DBConn.Preload("Reply").First(&post, id)
return c.JSON(post)
}

func CreatePost(c *fiber.Ctx) error {
var post models.Post
if err := c.BodyParser(&post); err != nil {
return c.Status(400).SendString(err.Error())
}
id, _ := gonanoid.Generate("0123456789", 10)
post.ID = id
database.DBConn.Create(&post)
return c.Status(201).JSON(post)
}
  
func DeletePost(c *fiber.Ctx) error {
id := c.Params("id")
var post models.Post
database.DBConn.Delete(&post, id)
return c.Status(200).SendString("Post deleted successfully")
}
```
controllers/replies.go
```go
package controllers

import (
"errors"
"github.com/100lvlmaster/5chan-go/database"
"github.com/100lvlmaster/5chan-go/models"
"github.com/gofiber/fiber/v2"
gonanoid "github.com/matoous/go-nanoid/v2"
"gorm.io/gorm"
)

func GetReplies(c *fiber.Ctx) error {
var replies []models.Reply
database.DBConn.Find(&replies)
return c.JSON(replies)
}

///
func GetRepliesByPostId(c *fiber.Ctx) error {
id := c.Params("id")
var replies []models.Reply
database.DBConn.Where(&models.Reply{PostID: id}).Find(&replies)
return c.JSON(replies)
}

///
func CreateReply(c *fiber.Ctx) error {
var reply models.Reply
if err := c.BodyParser(&reply); err != nil {
return c.Status(400).SendString("Incorrect input body, please chcek input convention and try again")
}

/// DB contains post
var result models.Post
err := database.DBConn.First(&result, reply.PostID).Error
hasRecord := !errors.Is(err, gorm.ErrRecordNotFound)
if !hasRecord {
return c.Status(400).SendString("Post does not exist")
}

///
id, _ := gonanoid.Generate("0123456789", 10)
reply.ID = id
database.DBConn.Create(&reply)
return c.Status(201).JSON(reply)
}
```
 
- Setup routes:


// routes/routes.go
```go
// routes/routes.go
package routes

import (
"github.com/100lvlmaster/5chan-go/controllers"
"github.com/gofiber/fiber/v2"
)

func RoutesInit(app *fiber.App) {
app.Get("/", func(c *fiber.Ctx) error {
return c.SendString("Hellso, World 👋!")
})
api := app.Group("/api")
v1 := api.Group("/v1")
v1.Get("/posts", controllers.GetPosts)
v1.Post("/posts", controllers.CreatePost)
v1.Get("/posts/:id", controllers.GetPostById)
v1.Delete("/posts/:id", controllers.DeletePost)
v1.Get("/replies", controllers.GetReplies)
v1.Get("/replies/:id", controllers.GetRepliesByPostId)
v1.Post("/replies", controllers.CreateReply)
}
```
 
 - A middleware to limit other methods like `POST` & `DELETE` to our Frontend. But you're using this you may change them to your liking in the `.env` file

middleware/middleware.go
```go
package middleware

import (
"os"
"github.com/gofiber/fiber/v2"
)
  
/// Limit post requests to the official client
func CustomeMiddleware() func(*fiber.Ctx) error {
return func(c *fiber.Ctx) error {
if c.Method() == "POST" || c.Method() == "DELETE" {
apiKey, envExists := os.LookupEnv("API_KEY")
if !envExists {
return c.Status(500).SendString("Could not fetch env vars, call 100lvlmaster")
	}
key := c.Get("Authorization")
if apiKey != key {
return c.Status(400).SendString("Your keys are incorrect peasant ✨✨")
	}
}
return c.Next()
	}
}
```

- And then tie everything together in the main.go file

main.go

```go
// main.go
package main

import (
"os"
"github.com/100lvlmaster/5chan-go/database"
"github.com/100lvlmaster/5chan-go/middleware"
"github.com/100lvlmaster/5chan-go/routes"
"github.com/gofiber/fiber/v2"
"github.com/gofiber/fiber/v2/middleware/cors"
"github.com/joho/godotenv"
)

func main() {
app := fiber.New()
godotenv.Load()
app.Use(cors.New())
// app.Use(cache.New())
app.Use(middleware.CustomeMiddleware())
database.DBConn = database.InitDb()
routes.RoutesInit(app)
port, envExists := os.LookupEnv("PORT")
if !envExists {
port = "8080"
}
app.Listen(":" + port)
}
```
- And then run the project using:
```bash
air
```
![air.png](https://imgur.com/KNtG8BH.png)

After making some test requests these are the screenshots:
![test-1.png](https://imgur.com/q6HJxj5.png)
![test-2.png](https://imgur.com/mfCWt0h.png)

The source code of this project lies at:
https://github.com/100lvlmaster/5chan-go
---- 
You can find me at:
Website 
https://www.navinkodag.com
Github
https://github.com/100lvlmaster
