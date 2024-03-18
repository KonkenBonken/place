import palette from './Color';

export default function ColorPicker({ selected }: { selected: `${number}-${number}` | null }) {
  if (!selected)
    return null;

  const [x, y] = selected.split('-').map(n => parseInt(n));

  return <section id="picker">
    {palette.map((clr, i) => <div
      key={i} style={clr.style}
      onClick={() =>
        fetch('/api', {
          method: 'POST',
          body: JSON.stringify({ x, y, id: clr.id })
        })
      }
    />)}
  </section>;
}
