package main

import (
	"fmt"
	profiles "userProfileSvc/src/routes"
	types "userProfileSvc/src/types"

	"github.com/gin-gonic/gin"
)

var syncedProfileMap types.SyncedProfileMap

func main() {

	// dummy data
	putin := types.UserProfile{
		UserId: "1",
		Topics: []string{"crime", "weapons"},
		About: types.About{
			Gender:          "M",
			SpendingClass:   9999,
			RealLifeStage:   "OA",
			ActingLifeStage: "OA",
		},
	}

	tony := types.UserProfile{
		UserId: "2",
		Topics: []string{"booze", "crafting"},
		About: types.About{
			Gender:          "M",
			SpendingClass:   300,
			RealLifeStage:   "A",
			ActingLifeStage: "YA",
		},
	}

	syncedProfileMap.M = make(map[string]types.UserProfile)
	syncedProfileMap.Lock()
	syncedProfileMap.M["1"] = putin
	syncedProfileMap.M["2"] = tony
	syncedProfileMap.Unlock()

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
