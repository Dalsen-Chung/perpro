window.onload = function() {
  window.addEventListener('hashchange', function() {
    console.log('hashchange');
    console.log(window.location);
  });
}
