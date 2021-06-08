# Micro

Microservice/kubernetes sandbox

## TODO

* k8 API gateway
* React app w/ form
* Registration service w/ POST (node)
  * ~~basic node server~~
  * ~~containerize~~
  * ~~files, in memory, other?~~ memory
  * ~~build GET~~
  * ~~build POST~~
* Profile service w/ GET (go)
* protobuf

## Scenarios

**New user registration**
* React app POSTs user info to the API gateway
* API gateway forwards to the UserRegistrationService
* Registration service validates the input & saves the user info in DB
* Reg service generates a user registration event
* UserProfileService hears event & creates a profile of the user
* EmailService hears event & sends welcome message

## Events

New users, edits to users, etc.

```json
{
    "type": "string",
    "timestamp": "string",
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


