import palette, { Color, defaultColor } from './Color';

export const
  width = 100, height = 100,
  grid = Array.from({ length: height }, () => Array.from<Color>({ length: width }).fill(defaultColor));


export function gridString() {
  return grid.flat().map(clr => clr.id).join('');
}

export function paint(x: number, y: number, colorId: string) {
  const colorIndex = parseInt(colorId, 21);

  if (x < 0 && y < 0 && x >= width && y >= height && colorIndex < 0 && colorIndex > 20)
    return false;

  grid[x][y] = palette[colorIndex];

  return true;
}
