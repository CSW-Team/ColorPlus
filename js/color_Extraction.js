let rgb_box_1 = document.getElementById("rgb_box_1");
let colorIndicator = document.getElementById("color-indicator");
let rgb_red = document.getElementById("rgb_red");
let rgb_green = document.getElementById("rgb_green");
let rgb_blue = document.getElementById("rgb_blue");


const colorPicker = new iro.ColorPicker("#color-picker",{
    layout: [
        { 
          component: iro.ui.Wheel,
          options: {
            wheelLightness : false,
            width : 300,
            borderColor: rgb_box_1,
          }
        },
        {
            component: iro.ui.Slider,
            options: {
                sliderType: 'value',
            }
        },
        {
            component: iro.ui.Slider,
            options: {
            //can also be 'saturation', 'value', 'red', 'green', 'blue', 'alpha' or 'kelvin'
                sliderType: 'red',
            }
        },
        {
            component: iro.ui.Slider,
            options: {
            //can also be 'saturation', 'value', 'red', 'green', 'blue', 'alpha' or 'kelvin'
                sliderType: 'green',
            }
        },
        {
            component: iro.ui.Slider,
            options: {
            //can also be 'saturation', 'value', 'red', 'green', 'blue', 'alpha' or 'kelvin'
                sliderType: 'blue',
            }
        },
        
        
      ],
});



colorPicker.on(["color:init", "color:change"], function(color){
    colorIndicator.style.backgroundColor = color.hexString;
    rgb_box_1.value = color.hexString;

    values.innerHTML = [
        "hex: " + color.hexString,
        "rgb: " + color.rgbString,
        "hsl: " + color.hslString].
        join("<br>");

});


function enterkey() {
	if (window.event.keyCode == 13) {
        colorIndicator.style.backgroundColor = rgb_box_1.value
    }
}