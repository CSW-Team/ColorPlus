let colorIndicator = document.getElementById("color-indicator");
let colorIndicator2 = document.getElementById("color-indicator2");
let colorIndicator3 = document.getElementById("color-indicator3");

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
  colors: [
    "rgb(255, 0, 0)", // pure red
    "rgb(0, 255, 0)", // pure green
    "rgb(0, 0, 255)", // pure blue
  ],
});

colorPicker.on(["color:init", "color:change"], function () {
  colorPicker.colors.forEach(function () {
    colorIndicator.style.backgroundColor = colorPicker.colors[0].rgbaString;
    colorIndicator2.style.backgroundColor = colorPicker.colors[1].rgbaString;
    colorIndicator3.style.backgroundColor = colorPicker.colors[2].rgbaString;
    hexInput.value = colorPicker.colors[0].hexString;
  });
});

hexInput.addEventListener("change", function () {
  colorPicker.color.hexString = this.value;
});
