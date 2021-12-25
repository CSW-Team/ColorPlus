$("div.start_cover").delay(1000).fadeOut(700); //시작했을때 사라지는 logo


let colorIndicator = document.getElementById("color_indicator");
const colorPicker = new iro.colorPicker("#color_picker",{
    width:180, color:"#fff"
});
colorPicker.on("color:change", function(color){
    colorIndicator.style.background = color.hexString;
});

