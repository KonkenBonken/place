import fs from 'fs';
import hasch from 'hasch';

import palette, { Color, defaultColorId } from './Color';

const width = 30, height = 30;

export const grid = stringToGrid(fs.readFileSync('img.txt', 'utf8') || defaultColorId.repeat(width * height));

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

  fs.promises.writeFile('img.txt', gridToString());

  return true;
}
