import Header from "../components/Header";
import Box from "../components/Box.js";
import Box2 from "../components/Box2.js";

export default function Coty() {
  return (
    <div>
      <Header />
      <div>
        <div class="color_year_box">
          <Box
            year={2022}
            color="#6667ab"
            color_name={"PANTONE 17-3938 Very Peri"}
          />
          <Box2
            year={2021}
            color="#f5df4d"
            color2="#939597"
            color_name={"PANTONE 17-5104 Ultimate Gray"}
            color2_name={"PANTONE 13-0647 Illuminating"}
          />
          <Box
            year={2020}
            color="#0f4c81"
            color_name={"PANTONE 19-4052 Classic Blue"}
          />
        </div>
        <div class="color_year_box">
          <Box
            year={2019}
            color="#ff6f61"
            color_name={"PANTONE 16-1546 Living Coral"}
          />
          <Box
            year={2018}
            color="#5F4B8B"
            color_name={"PANTONE 18-3838 Ultra Violet"}
          />
          <Box
            year={2017}
            color="#88B04B"
            color_name={"PANTONE 15-0343 Greenery"}
          />
        </div>
        <div class="color_year_box">
          <Box2
            year={2016}
            color="#91A8D0"
            color2="#F7CAC9"
            color_name={"PANTONE 13-1520 Rose Quartz"}
            color2_name={"PANTONE 15-3919 Serenity"}
          />
          <Box
            year={2015}
            color="#964F4C"
            color_name={"PANTONE 18-1438 Marsala"}
          />
          <Box
            year={2014}
            color="#AD5E99"
            color_name={"PANTONE 18-3224 Radiant Orchid"}
          />
        </div>
        <div class="color_year_box">
          <Box
            year={2013}
            color="#009473"
            color_name={"PANTONE 17-5641 Emerald"}
          />
          <Box
            year={2012}
            color="#DD4124"
            color_name={"PANTONE 17-1463 Tangerine Tango"}
          />
          <Box
            year={2011}
            color="#D94F70"
            color_name={"PANTONE 18-2120 Honeysuckle"}
          />
        </div>
        <div class="color_year_box">
          <Box
            year={2010}
            color="#45B5AA"
            color_name={"PANTONE 15-5519 Turquoise"}
          />
          <Box
            year={2009}
            color="#F0C05A"
            color_name={"PANTONE 14-0848 Mimosa"}
          />
          <Box
            year={2008}
            color="#5A5B9F"
            color_name={"PANTONE 18-3943 Blue Iris"}
          />
        </div>
        <div class="color_year_box">
          <Box
            year={2007}
            color="#9B1B30"
            color_name={"PANTONE 19-1557 Chili Pepper"}
          />
          <Box
            year={2006}
            color="#DECDBE"
            color_name={"PANTONE 13-1106 Sand Dollar"}
          />
          <Box
            year={2005}
            color="#53B0AE"
            color_name={"PANTONE Blue 15-5217 Turquoise"}
          />
        </div>
        <div class="color_year_box">
          <Box
            year={2004}
            color="#E2583E"
            color_name={"PANTONE 17-1456 Tigerlily"}
          />
          <Box
            year={2003}
            color="#7BC4C4"
            color_name={"PANTONE 14-4811 Aqua Sky"}
          />
          <Box
            year={2002}
            color="#BF1932"
            color_name={"PANTONE 19-1664 True Red"}
          />
        </div>
        <div class="color_year_box">
          <Box
            year={2001}
            color="#C74375"
            color_name={"PANTONE 17-2031 Fuchsia Rose"}
          />
          <Box
            year={2000}
            color="#98B2D1"
            color_name={"PANTONE 15-4020 Cerulean Blue"}
          />
          <Box color="#" />
        </div>
      </div>
    </div>
  );
}
