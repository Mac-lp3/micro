package main

import (
	"github.com/gin-gonic/gin"
)

func main() {

	router := gin.Default()

	router.GET("/profiles/:id", func(c *gin.Context) {
		name := c.Param("id")
		c.JSON(200, gin.H{
			"name": name,
		})
	})

	router.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
