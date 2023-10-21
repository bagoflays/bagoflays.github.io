(() => {
  if (window.location.href.includes('https://bagoflays.github.io/') || window.location.href.includes('http://bagoflays.great-site.net/')) {
    alert("this bookmark can't be used on this site.");
  } else {
    bagoflays();
  }

  function bagoflays() {
    var addBagOfLays = confirm('add some extra bagoflays games?');
    if (addBagOfLays) {
      window.open('https://bagoflays.github.io/');
    }
  }
})();
