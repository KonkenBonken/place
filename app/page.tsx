const width = 100, height = 100;

export default function App() {
  return (
    <main>
      {Array.from({ length: height }).fill(0).map((_, y) => (
        <div key={y}>
          {Array.from({ length: width }).fill(0).map((_, x) => (
            <div key={x} />
          ))}
        </div>
      ))}
    </main>
  );
}
