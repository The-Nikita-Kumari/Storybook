import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const brandTheme = create({
  base: "dark",
  brandTitle: "Testing Suite — Design System",
  colorPrimary:    "#f0c040",
  colorSecondary:  "#f0c040",
  appBg:           "#0d0d1a",
  appContentBg:    "#12122a",
  appBorderColor:  "#2a2a4a",
  appBorderRadius: 0,
  textColor:        "#e8e4d4",
  textInverseColor: "#0d0d1a",
  textMutedColor:   "#7a7a9a",
  barTextColor:     "#9999bb",
  barSelectedColor: "#f0c040",
  barBg:            "#0d0d1a",
  inputBg:          "#1a1a35",
  inputBorder:      "#3a3a5a",
  inputTextColor:   "#e8e4d4",
  inputBorderRadius: 0,
});

addons.setConfig({ theme: brandTheme });
