package main

import (
	"fmt"
	profiles "userProfileSvc/src/routes"

	"github.com/gin-gonic/gin"
)

var profileMap = make(map[string]profiles.UserProfile)

func startServer() {
	fmt.Println("starting the api")

	router := gin.Default()

	router.GET("/profiles/:id", func(c *gin.Context) {
		profiles.GetProfile(c, &profileMap)
	})

	router.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}

func startEventListener() {
	fmt.Println("listening for events")
}

func main() {

	go startEventListener()
	startServer()

}
