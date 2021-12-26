let rgb_box_1 = document.getElementById("rgb_box_1");
let rgb_box_2 = document.getElementById("rgb_box_2");
let rgb_box_3 = document.getElementById("rgb_box_3");
let colorIndicator = document.getElementById("color-indicator");




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
                sliderType: 'red',
            }
        },
        {
            component: iro.ui.Slider,
            options: {
                sliderType: 'green',
            }
        },
        {
            component: iro.ui.Slider,
            options: {
                sliderType: 'blue',
            }
        },
        
        
      ],
});



colorPicker.on(["color:init", "color:change"], function(color){
    colorIndicator.style.backgroundColor = color.hexString;
    rgb_box_1.value = color.hexString;
    rgb_box_2.value = color.rgbString;
    rgb_box_3.value = color.hslString;

});


function enterkey() {
	if (window.event.keyCode == 13) {
        colorIndicator.style.backgroundColor = rgb_box_1.value
    }
}