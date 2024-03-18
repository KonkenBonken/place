import hsl from 'hsl-to-hex';

export class Color {
  readonly hex: string;

  constructor(readonly h: number, readonly s: number, readonly l: number, readonly i: number) {
    this.hex = hsl(h, s, l);
  }

  toValue() {
    return parseInt(this.hex.substring(1), 16);
  }

  get style() {
    if (this === defaultColor)
      return {};
    return { backgroundColor: this.hex };
  }

  get id() {
    return this.i.toString(21);
  }
}

const palette = [
  new Color(0, 95, 75, 0), new Color(60, 95, 75, 1), new Color(120, 95, 75, 2), new Color(175, 95, 75, 3), new Color(240, 95, 75, 4), new Color(300, 95, 75, 5), new Color(0, 0, 100, 6),
  new Color(0, 85, 50, 7), new Color(60, 85, 50, 8), new Color(120, 85, 50, 9), new Color(180, 85, 50, 10), new Color(240, 85, 50, 11), new Color(300, 85, 50, 12), new Color(0, 0, 50, 13),
  new Color(0, 95, 30, 14), new Color(60, 95, 30, 15), new Color(120, 95, 30, 16), new Color(180, 95, 30, 17), new Color(240, 95, 30, 18), new Color(300, 95, 30, 19), new Color(0, 0, 0, 20),
];

export default palette;

export const defaultColor = palette[6];
