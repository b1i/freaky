function freaky(from, to) {
  function redirect(url, callback) {
    fetch(url, { method: "HEAD" }).then(function (status) {
      callback(status.ok)
    })
  }

  redirect(from, function (exists) {
    if (exists) {
      return
    } else {
      window.location.replace(to)
    }
  })
}

module.exports = freaky
