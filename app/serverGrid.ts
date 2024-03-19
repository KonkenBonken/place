import hasch from 'hasch';

import palette, { Color, defaultColor } from './Color';

export const
  width = 30, height = 30,
  grid = Array.from({ length: height }, () => Array.from<Color>({ length: width }).fill(defaultColor));

export function hashGen(grid: Color[][]) {
  return hasch(grid.flat().map(clr => clr.id).join('-'), { base: 36 });
}

export function gridToString() {
  return grid.flat().map(clr => clr.id).join('');
}

export function stringToGrid(str: string) {
  const pixels = str.split('')
    .map(id => palette[parseInt(id, 21)]);

  const grid = Array.from({ length: height }, (): Color[] => []);

  for (let i = 0; i < grid.length; i++)
    grid[i] = pixels.slice(i * width, (i + 1) * width);

  return grid;
}

export function paint(x: number, y: number, colorId: string) {
  const colorIndex = parseInt(colorId, 21);

  if (x < 0 && y < 0 && x >= width && y >= height && colorIndex < 0 && colorIndex > 20)
    return false;

  grid[y][x] = palette[colorIndex];

  return true;
}
