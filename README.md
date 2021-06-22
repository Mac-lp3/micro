# Micro

Microservice/kubernetes sandbox

## TODO

### features
* eventsSvc (koa/generators)
  * GET event(s)
  * POST event
  * DELETE event
* dashboard <-> apis(ingress)
  * pattern for dummy data vs integrated mode
  * CORS issues
* basic event streaming
  * echo event listeners (profileSvc)
  * POST events endpoint (mock with new "api gateway" server)
  * create event interface in dashboard & POST call

### raw list
* shared envs
  * port numbers
  * endpoints/locations
* k8 API gateway/ingress
* containerized ML model
  * pattern for training
  * pattern for persisting
  * pattern for serving
* React app w/ form
  * table for users
  * GET users call
  * POST user endpoint
  * table for profiles
  * GET profiles call
  * GET events call
  * POST event endpoint
* ~~Registration service w/ POST (node)~~
* Profile service w/ GET (go)
  * ~~GET profiles/{id}~~
  * ~~event queue impl (nats)~~
  * listen for events
    * ~~docker server/go client~~
    * ~~listen & log~~
    * ~~post messages~~
    * create user event handle
    * iteraction event handle
    * plan for updateProfile(event) 
  * tests
* multistage builds
* protobuf catch up
* protobuf patterns

## Scenarios

**New user registration**
* React app POSTs user info to the API gateway
* API gateway forwards to the UserRegistrationService
* Registration service validates the input & saves the user info in DB
* Reg service generates a user registration event
* UserProfileService hears event & creates a profile of the user
* EmailService hears event & sends welcome message

## Events

New users, edits to users, new interactions, etc.

```json
{
  "type": "string",
  "payload": {
    "any": "any"
  }
}
```

## Interactions

Interactions stream into the system from various sources (point of sale systems, partner web sites/mobile apps, IoT devices, etc).

They may be sent in batch, API endpoint, or other.

```json
{
  "type": "string",
  "timestamp": "string",
  "origin": {
    "id": "string",
    "type": "string"
  },
  "actor": {
    "id": "string",
    "type": "string"
  },
  "target": {
    "id": "string",
    "type": "string"
  }
}
```

Interactions (the value of `interaction.type`) can be one of the following:

| Value    | Description                                             |
| -------- | ------------------------------------------------------- |
| PURCHACE | User bought the target thing                            |
| SAVE     | User saved/wishlist/"hearted" the target thing          |
| INQUERY  | User interacted with the origin, but no specific action |
| VIEW     | User clicked/stopped scrolling on the target            |
| SHARE    | User emailed/FB/tweeted/etc a link to the target        |

## User Profile

Summary of a user's habbits and preferences.

Updated in real time based on interactions/other events.

Services can use the profile to tailor messages to be more relevant for the user.

```json
{
  "userId": "number",
  "about": {
    "gender": "string",
    "spendingClass": "number",
    "realLifeStage": "string",
    "actingLifeStage": "string"
  }
  "topics": "string[]"
}
```
