'use client';

import { useState } from 'react';
import ColorPicker from './ColorPicker';
import { stringToGrid, height, width } from './Grid';
import { defaultColor, type Color } from './Color';


export default function App() {
  const [selected, setSelected] = useState<`${number}-${number}` | null>(null);

  const [grid, setGrid] = useState(Array.from({ length: height }, () => Array.from<Color>({ length: width }).fill(defaultColor)));

  async function fetchGrid() {
    const gridString = await fetch('/api').then(res => res.text());
    setGrid(stringToGrid(gridString));
  }

  return (<>
    <main id="grid">
      {grid.map((row, y) =>
        <div key={y}>{
          row.map((clr, x) =>
            <div key={x} style={clr.style}
              className={`${x}-${y}` === selected ? 'selected' : undefined}
              onClick={() => `${x}-${y}` === selected ? setSelected(null) : setSelected(`${x}-${y}`)}
            />
          )
        }</div>
      )}
    </main>
    <ColorPicker selected={selected} />
  </>);
}
