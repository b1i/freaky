# freaky
### basic setup

Install freaky through npm or yarn

```rust
npm i freaky
```
```rust
const freaky = require('freaky')
```

### Handling URL redirect

check if the URL your about to go to is 404 and redirect the client to another URL.

```rust
freaky(fromUrl,toURL)
```


```rust
check.addEventListener("click", () => {
  freaky(
    "http://status404.com",
    "http://goodurl.com"
  )
})
```
