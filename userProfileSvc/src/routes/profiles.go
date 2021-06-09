package profiles

import (
	types "userProfileSvc/src/types"

	"github.com/gin-gonic/gin"
)

func GetProfile(c *gin.Context, profileMap *types.SyncedProfileMap) {

	id := c.Param("id")

	profileMap.RLock()
	prof, ok := profileMap.M[id]
	profileMap.RUnlock()

	var httpCode int
	var resp interface{}
	if ok {
		httpCode = 200
		resp = buildResourceResponse(httpCode, prof)
	} else {
		httpCode = 404
		resp = buildErrorResponse(httpCode, "ID not in database")
	}

	c.JSON(httpCode, resp)

}

func buildResourceResponse(code int, profile types.UserProfile) types.ResourceResponse {

	resp := types.ResourceResponse{
		Metadata: types.Metadata{
			HttpCode: code,
			Total:    1,
		},
		Payload: profile,
	}

	return resp

}

func buildErrorResponse(code int, message string) types.ErrorResponse {

	resp := types.ErrorResponse{
		Metadata: types.Metadata{
			HttpCode: code,
		},
		Error: types.ApiError{
			Message: message,
		},
	}

	return resp
}
