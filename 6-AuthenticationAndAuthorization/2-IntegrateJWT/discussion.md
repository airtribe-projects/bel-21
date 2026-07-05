### JWT (JSON WEB TOKEN)
* Authentication
* Autorization


### Structure of JWT
* 3 Parts 
    - Header 
    - Payload
    - Signature


### Oauth (AirBnB): 
* User initiaites a login on a service. (Login With Google) 
* Service Provider (AirBnN) redirect user to IdP (Identity Provider, Google) 
* User provides a go a head, IdP redirects back to service Provider
* IdP Gives back a token (this token is used by the service Provider to validate the user)
* JWK URL


Token -> JWT

JWK ==> JSON Web Key


Encryption 
* Symmetric Encryption 
* Asymmetric Encryption (Public Key, Private Key) --> Https



Airbnb checks that the token’s contents are logically sound:

| Claim | What it means                   | What Airbnb checks                         |
| ----- | ------------------------------- | ------------------------------------------ |
| `iss` | Issuer of the token             | Must be `https://accounts.google.com`      |
| `aud` | Audience — who the token is for | Must match Airbnb's registered `client_id` |
| `exp` | Expiration timestamp            | Must not be expired                        |
| `sub` | Subject — unique user ID        | Used to identify the user                  |


- **Resource Owner:** The user who owns the data.  
- **Client:** Airbnb — the app requesting access.  
- **Authorization Server:** Google — authenticates the user and issues tokens.  
- **Resource Server:** Google Calendar API — hosts your calendar data.
