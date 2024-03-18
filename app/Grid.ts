import palette, { Color, defaultColor } from './Color';

export const
  width = 100, height = 100,
  grid = Array.from({ length: height }, () => Array.from<Color>({ length: width }).fill(defaultColor));


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
