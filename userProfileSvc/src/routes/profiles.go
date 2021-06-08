package profiles

import "github.com/gin-gonic/gin"

type UserProfile struct {
	UserId string
	About  About
	Topics []string
}

type About struct {
	Gender          string
	SpendingClass   int
	RealLifeStage   string
	ActingLifeStage string
}

func GetProfile(c *gin.Context) {
	id := c.Param("id")

	profile := UserProfile{
		id,
		About{
			"M", 150, "A", "YA",
		},
		[]string{"", ""},
	}

	c.JSON(200, profile)
}
