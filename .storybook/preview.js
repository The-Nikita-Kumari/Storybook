import "../src/styles/globals.css";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#f5f3ee" },
        { name: "dark",  value: "#0d0d1a" },
        { name: "white", value: "#ffffff" },
        { name: "black", value: "#000000" },
      ],
    },
    layout: "centered",
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark:  "dark",
      },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
  ],
};

export default preview;
