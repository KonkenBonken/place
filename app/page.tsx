const width = 100, height = 100;

const grid = Array.from({ length: height }, () => Array.from<number>({ length: width }).fill(0xFFFFFF));

export default function App() {
  return (
    <main>
      {grid.map((row, y) =>
        <div key={y}>{
          row.map((clr, x) =>
            <div key={x} style={{ backgroundColor: '#' + clr.toString(16) }} />
          )
        }</div>
      )}
    </main>
  );
}
