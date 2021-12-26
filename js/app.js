let colorIndicator = document.getElementById("color-indicator");
let colorIndicator2 = document.getElementById("color-indicator2");
let colorIndicator3 = document.getElementById("color-indicator3");
//-------------------------------------------------------------------------------------------
let color_material_1 = document.getElementById("color_material_1");
let color_material_2 = document.getElementById("color_material_2");
let color_fusion_output = document.getElementById("color_fusion_output");

var hexInput = document.getElementById("hexInput");
var rgbInput = document.getElementById("rgbInput");
var hslInput = document.getElementById("hslInput");

var hexInput2 = document.getElementById("hexInput2");
var rgbInput2 = document.getElementById("rgbInput2");
var hslInput2 = document.getElementById("hslInput2");

var color_fusion_output_rgb = document.getElementById(
  "color_fusion_output_rgb"
);

var color_fusion_output_hex = document.getElementById(
  "color_fusion_output_hex"
);

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const colorPicker = new iro.ColorPicker("#color-picker", {
  layout: [
    {
      component: iro.ui.Wheel,
      options: {
        wheelLightness: false,
        width: 450,
      },
    },
  ],
  colors: ["rgb(255, 0, 0)", "rgb(0, 255, 0)"],
});

colorPicker.on(["color:init", "color:change"], function () {
  colorPicker.colors.forEach(function () {
    colorIndicator.style.backgroundColor = colorPicker.colors[0].rgbString;
    color_material_1.style.backgroundColor = colorPicker.colors[0].rgbString;
    hexInput.value = colorPicker.colors[0].hexString;
    rgbInput.value = colorPicker.colors[0].rgbString;
    hslInput.value = colorPicker.colors[0].hslString;

    colorIndicator2.style.backgroundColor = colorPicker.colors[1].rgbString;
    color_material_2.style.backgroundColor = colorPicker.colors[1].rgbString;
    hexInput2.value = colorPicker.colors[1].hexString;
    rgbInput2.value = colorPicker.colors[1].rgbString;
    hslInput2.value = colorPicker.colors[1].hslString;

    var material1_red = colorPicker.colors[0].red;
    var material1_green = colorPicker.colors[0].green;
    var material1_blue = colorPicker.colors[0].blue;

    var material2_red = colorPicker.colors[1].red;
    var material2_green = colorPicker.colors[1].green;
    var material2_blue = colorPicker.colors[1].blue;

    var output_red = material1_red + material2_red;
    output_red = output_red / 2;
    output_red = Math.round(output_red);

    output_green = material1_green + material2_green;
    output_green = output_green / 2;
    output_green = Math.round(output_green);

    output_blue = material1_blue + material2_blue;
    output_blue = output_blue / 2;
    output_blue = Math.round(output_blue);

    color_fusion_output_hex.value = rgbToHex(
      output_red,
      output_green,
      output_blue
    );

    color_fusion_output_rgb.value =
      "rgb(" +
      String(output_red) +
      "," +
      String(output_green) +
      "," +
      String(output_blue) +
      ")";

    color_fusion_output.style.backgroundColor =
      "rgb(" +
      String(output_red) +
      "," +
      String(output_green) +
      "," +
      String(output_blue) +
      ")";
  });
});

hexInput.addEventListener("change", function () {
  colorPicker.colors[0].hexString = this.value;
});

rgbInput.addEventListener("change", function () {
  colorPicker.colors[0].rgbString = this.value;
});

hslInput.addEventListener("change", function () {
  colorPicker.colors[0].hslString = this.value;
});

hexInput2.addEventListener("change", function () {
  colorPicker.colors[1].hexString = this.value;
});

rgbInput2.addEventListener("change", function () {
  colorPicker.colors[1].rgbString = this.value;
});

hslInput2.addEventListener("change", function () {
  colorPicker.colors[1].hslString = this.value;
});
