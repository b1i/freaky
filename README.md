# freaky

URL redirection 

### Basic setup

Install [freaky] through npm or yarn

```rust
npm i freaky
```
```rust
const freaky = require('freaky')
```
[freaky]: https://www.npmjs.com/package/freaky
### Handling URL

Checking the URL status and redirect the client to another URL if necessary.

Example:
```rust
check.addEventListener("click", () => {
  freaky(
    "https://status404.com",
    "https://status200.com"
  )
})
```
