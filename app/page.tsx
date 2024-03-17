import { Color, defaultColor } from './Color';

const width = 100, height = 100;

const grid = Array.from({ length: height }, () => Array.from<Color>({ length: width }).fill(defaultColor));

export default function App() {
  return (
    <main>
      {grid.map((row, y) =>
        <div key={y}>{
          row.map((clr, x) =>
            <div key={x} style={clr.style} />
          )
        }</div>
      )}
    </main>
  );
}
