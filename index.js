const freaky = (function() {
  function checkLink(url, redirectUrl) {
    fetch(url, { method: 'HEAD' })
      .then(response => {
        if (response.status === 404) {
          // link leads to a 404 page
          window.location.href = redirectUrl;
        }
      })
      .catch(() => {
        // handle any errors that may occur during the fetch
      });
  }

  function checkLinkOnBeforeUnload(url, redirectUrl) {
    window.addEventListener("beforeunload", e => {
        checkLink(url, redirectUrl);
    });
  }

  function checkLinkOnPopState(url, redirectUrl) {
    window.addEventListener("popstate", e => {
        checkLink(url, redirectUrl);
    });
  }
  return {
    checkLink,
    checkLinkOnBeforeUnload,
    checkLinkOnPopState
  };
})();
