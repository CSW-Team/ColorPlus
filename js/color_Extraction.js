var hexInput = document.getElementById("hexInput");
var rgbInput = document.getElementById("rgbInput");
var hslInput = document.getElementById("hslInput");
let colorIndicator = document.getElementById("color-indicator");

const colorPicker = new iro.ColorPicker("#color-picker", {
  layout: [
    {
      component: iro.ui.Wheel,
      options: {
        wheelLightness: false,
        width: 300,
      },
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: "value",
      },
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: "red",
      },
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: "green",
      },
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: "blue",
      },
    },
  ],
});

colorPicker.on(["color:init", "color:change"], function (color) {
  colorIndicator.style.backgroundColor = color.hexString;

  hexInput.value = color.hexString;
  rgbInput.value = color.rgbString;
  hslInput.value = color.hslString;
});

hexInput.addEventListener("change", function () {
  colorPicker.color.hexString = this.value;
});

rgbInput.addEventListener("change", function () {
  colorPicker.color.rgbString = this.value;
});

hslInput.addEventListener("change", function () {
  colorPicker.color.hslString = this.value;
});
