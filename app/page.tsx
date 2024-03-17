import hsl from 'hsl-to-hex';

const width = 100, height = 100;

const colorPalette = [
  hsl(0, 95, 80), hsl(60, 95, 80), hsl(120, 95, 80), hsl(180, 95, 80), hsl(240, 95, 80), hsl(300, 95, 80), hsl(0, 0, 100),
  hsl(0, 85, 50), hsl(60, 85, 50), hsl(120, 85, 50), hsl(180, 85, 50), hsl(240, 85, 50), hsl(300, 85, 50), hsl(0, 0, 50),
  hsl(0, 95, 20), hsl(60, 95, 20), hsl(120, 95, 20), hsl(180, 95, 20), hsl(240, 95, 20), hsl(300, 95, 20), hsl(0, 0, 0),
];

const grid = Array.from({ length: height }, () => Array.from<string>({ length: width }).fill('#ffffff'));

export default function App() {
  return (
    <main>
      {grid.map((row, y) =>
        <div key={y}>{
          row.map((clr, x) =>
            <div key={x} style={clr !== '#ffffff' ? { backgroundColor: clr } : {}} />
          )
        }</div>
      )}
    </main>
  );
}
