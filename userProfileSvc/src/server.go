package main

import (
	profiles "userProfileSvc/src/routes"

	"github.com/gin-gonic/gin"
)

func main() {

	router := gin.Default()

	router.GET("/profiles/:id", profiles.GetProfile)

	router.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
