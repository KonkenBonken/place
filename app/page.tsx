'use client';

import { useState } from 'react';
import useInterval from 'use-interval';

import ColorPicker from './ColorPicker';
import { stringToGrid, height, width, hashGen } from './Grid';
import { defaultColor, type Color } from './Color';


export default function App() {
  const [selected, setSelected] = useState<`${number}-${number}` | null>(null);

  const [grid, setGrid] = useState(Array.from({ length: height }, () => Array.from<Color>({ length: width }).fill(defaultColor)));

  async function fetchGrid() {
    const res = await fetch(`/api/${hashGen(grid)}`);
    if (res.status === 200) {
      const gridString = await res.text();
      setGrid(stringToGrid(gridString));
    }
  }

  useInterval(fetchGrid, 5000, true);

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
