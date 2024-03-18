import { useState } from 'react';

import palette from './Color';

export default function ColorPicker({ selected, fetchGrid }: { selected: `${number}-${number}` | null, fetchGrid(): void }) {
  const [painted, setPainted] = useState(false);

  if (!selected)
    return null;

  const [x, y] = selected.split('-').map(n => parseInt(n));

  return <section id="picker">
    {painted && <section>You can only paint once every 5min</section>}
    {palette.map((clr, i) => <div
      key={i} style={clr.style}
      onClick={() =>
        fetch('/api/paint', {
          method: 'POST',
          body: JSON.stringify({ x, y, id: clr.id })
        })
          .then(res => {
            switch (res.status) {
              case 401:
                setPainted(true);
                setTimeout(() => setPainted(false), 5000);
            }
            fetchGrid();
          })
      }
    />)}
  </section>;
}
