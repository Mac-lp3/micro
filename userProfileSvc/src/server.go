package main

import (
	"fmt"
	profiles "userProfileSvc/src/routes"
	types "userProfileSvc/src/types"

	"github.com/gin-gonic/gin"
)

var syncedProfileMap types.SyncedProfileMap

func main() {

	syncedProfileMap.M = make(map[string]types.UserProfile)

	go startEventListener()
	startServer()

}

func startServer() {

	fmt.Println("starting the api")

	router := gin.Default()

	router.GET("/profiles/:id", func(c *gin.Context) {
		profiles.GetProfile(c, &syncedProfileMap)
	})

	// defaults to 0.0.0.0/localhost:8080
	router.Run()
}

func startEventListener() {
	fmt.Println("listening for events")
}
