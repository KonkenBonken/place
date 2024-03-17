import hsl from 'hsl-to-hex';

export class Color {
  readonly hex: string;

  constructor(readonly h: number, readonly s: number, readonly l: number) {
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
}

const palette = [
  new Color(0, 95, 80), new Color(60, 95, 80), new Color(120, 95, 80), new Color(180, 95, 80), new Color(240, 95, 80), new Color(300, 95, 80), new Color(0, 0, 100),
  new Color(0, 85, 50), new Color(60, 85, 50), new Color(120, 85, 50), new Color(180, 85, 50), new Color(240, 85, 50), new Color(300, 85, 50), new Color(0, 0, 50),
  new Color(0, 95, 20), new Color(60, 95, 20), new Color(120, 95, 20), new Color(180, 95, 20), new Color(240, 95, 20), new Color(300, 95, 20), new Color(0, 0, 0),
];

export default palette;

export const defaultColor = palette[6];
