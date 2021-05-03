export const get_random_color = () => {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
};

const pad = (num, totalChars) => {
  var pad = "0";
  num = num + "";
  while (num.length < totalChars) {
    num = pad + num;
  }
  return num;
};

export const changeColor = (color1, ratio, darker) => {
  const color2 = color1.replace(/^\s*|\s*$/, "");
  const color = color2.replace(
    /^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i,
    "#$1$1$2$2$3$3"
  );

  var difference = Math.round(ratio * 255) * (darker ? -1 : 1),
    minmax = darker ? Math.max : Math.min,
    decimal = color
      .replace(
        /^#?([a-z0-9][a-z0-9])([a-z0-9][a-z0-9])([a-z0-9][a-z0-9])/i,
        function () {
          return (
            parseInt(arguments[1], 16) +
            "," +
            parseInt(arguments[2], 16) +
            "," +
            parseInt(arguments[3], 16)
          );
        }
      )
      .split(/,/);

  return [
    "#",
    pad(minmax(parseInt(decimal[0], 10) + difference, 0).toString(16), 2),
    pad(minmax(parseInt(decimal[1], 10) + difference, 0).toString(16), 2),
    pad(minmax(parseInt(decimal[2], 10) + difference, 0).toString(16), 2),
  ].join("");
};

export const getRandomColor = () => {
  var num = (Math.floor(Math.random() * 4) * 4).toString(16);
  var letters = ["0", "F", num];
  var color = "#";

  for (var i = 0; i < 3; i++) {
    let pos = Math.floor(Math.random() * letters.length);
    color += letters[pos];
    letters.splice(pos, 1);
  }
  return color;
};
