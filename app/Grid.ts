import { Color, defaultColor } from './Color';

export const
  width = 100, height = 100,
  grid = Array.from({ length: height }, () => Array.from<Color>({ length: width }).fill(defaultColor));


export function gridString() {
  return grid.flat().map(clr => clr.id).join('');
}
