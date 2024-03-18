'use client';

import { useState } from 'react';
import ColorPicker from './ColorPicker';
import { grid } from './Grid';

export default function App() {
  const [selected, setSelected] = useState<`${number}-${number}` | null>(null);

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
    {selected && <ColorPicker />}
  </>);
}
