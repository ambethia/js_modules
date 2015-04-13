function main () {

  var a = document.getElementById('a');
  var b = document.getElementById('b');
  var c = document.getElementById('c');
  var r = document.querySelector('input[type=range]');

  function setSwatchColor(swatch, aColor) {
    swatch.style.backgroundColor = aColor;
    swatch.textContent = aColor;
  };

  function randomizeSwatch(swatch) {
    setSwatchColor(swatch, random());
  }

  function mixSwatches() {
    var f = parseFloat(r.value);
    setSwatchColor(b, mix(a.textContent, c.textContent, f));
  };

  a.addEventListener('click', function(e) { randomizeSwatch(e.target); mixSwatches(); });
  c.addEventListener('click', function(e) { randomizeSwatch(e.target); mixSwatches(); });
  r.addEventListener('input', mixSwatches);

  randomizeSwatch(a);
  randomizeSwatch(c);
  mixSwatches();
};

document.addEventListener('DOMContentLoaded', main);
