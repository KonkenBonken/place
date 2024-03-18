'use client';

import { useState } from 'react';
import { Color, defaultColor } from './Color';

const width = 100, height = 100;

const grid = Array.from({ length: height }, () => Array.from<Color>({ length: width }).fill(defaultColor));

export default function App() {
  const [selected, setSelected] = useState<`${number}-${number}`>();

  return (
    <main>
      {grid.map((row, y) =>
        <div key={y}>{
          row.map((clr, x) =>
            <div key={x} style={clr.style}
              className={`${x}-${y}` === selected ? 'selected' : undefined}
              onClick={() => setSelected(`${x}-${y}`)}
            />
          )
        }</div>
      )}
    </main>
  );
}
