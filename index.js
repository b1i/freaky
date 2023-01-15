function freaky(a, b) {
  function redirect(url, callback) {
    fetch(url, { method: "HEAD" }).then(function (status) {
      callback(status.ok)
    })
  }

  redirect(a, function (exists) {
    if (exists) {
      window.location.replace(a)
    } else {
      window.location.replace(b)
    }
  })
}

module.exports = freaky

