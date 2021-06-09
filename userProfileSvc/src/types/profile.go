package types

import "sync"

type About struct {
	Gender          string `json:"gender"`
	SpendingClass   int    `json:"spendingClass"`
	RealLifeStage   string `json:"realLifeStage"`
	ActingLifeStage string `json:"actingLifeStage"`
}

type UserProfile struct {
	UserId string   `json:"userId"`
	About  About    `json:"about"`
	Topics []string `json:"topics"`
}

type ApiError struct {
	Message string `json:"message"`
}

type SyncedProfileMap struct {
	sync.RWMutex
	M map[string]UserProfile
}

type Metadata struct {
	HttpCode int `json:"httpCode"`
	Total    int `json:"total,omitempty"`
}

type ResourceResponse struct {
	Metadata Metadata    `json:"metadata"`
	Payload  interface{} `json:"payload"`
}

type ErrorResponse struct {
	Metadata Metadata `json:"metadata"`
	Error    ApiError `json:"error"`
}
