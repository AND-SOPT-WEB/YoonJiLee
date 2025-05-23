import { Theme } from "@emotion/react";

const color = {
  black: "#141414",
  gray: "#A9A9A9",
  white: "#FFFFFF",
  brown: "#8B4513",
  darkBrown: "#5D3A3A",
  error: "red",
};

const fontSize = {
  small: "1.25rem",
  medium: "1.5rem",
  large: "2.4rem",
};

const fontWeight = {
  medium: 600,
  bold: 700,
};

export type ColorType = typeof color;
export type FontSizeType = typeof fontSize;
export type FontWeightType = typeof fontWeight;

const theme: Theme = {
  color,
  fontSize,
  fontWeight,
};

export default theme;