import { Color, defaultColor } from './Color';

export const
  width = 100, height = 100,
  grid = Array.from({ length: height }, () => Array.from<Color>({ length: width }).fill(defaultColor));

