import hasch from 'hasch';

import palette, { Color } from './Color';

export const
  width = 30, height = 30;

export function hashGen(grid: Color[][]) {
  return hasch(grid.flat().map(clr => clr.id).join('-'), { base: 36 });
}

export function stringToGrid(str: string) {
  const pixels = str.split('')
    .map(id => palette[parseInt(id, 21)]);

  const grid = Array.from({ length: height }, (): Color[] => []);

  for (let i = 0; i < grid.length; i++)
    grid[i] = pixels.slice(i * width, (i + 1) * width);

  return grid;
}
