function fromHex(hexString) {
  var components = hexString.match(/[a-f0-9]{2}/gi);
  if (components.length < 3) throw new Error("Bad color: " + hexString);

  for (var i = components.length - 1; i >= 0; i--) {
    var hex = components[i];
    components[i] = parseInt(hex, 16);
  };

  return {
    r: components[0], g: components[1], b: components[2]
  };
};

function toHex(aColor) {
  return '#' + [
    aColor.r, aColor.g, aColor.b
  ].map(function(c) { return componentToHex(c) } ).join('');
};

function componentToHex(component) {
  var hex = component.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

function random() {
  var components = [];
  for (var i = 0; i < 3; i++)
    components[i] = Math.floor(Math.random() * 255);
  return toHex({ r: components[0], g: components[1], b: components[2] });
};

function mix(c1, c2, f) {
  c1 = typeof c1 == 'string' ? fromHex(c1) : c1;
  c2 = typeof c2 == 'string' ? fromHex(c2) : c2;
  f = typeof f == 'undefined' ? 0.5 : f;
  return toHex({
    r: Math.round(c1.r + f * (c2.r - c1.r)),
    g: Math.round(c1.g + f * (c2.g - c1.g)),
    b: Math.round(c1.b + f * (c2.b - c1.b))
  });
};
