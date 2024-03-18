import palette from './Color';

export default function ColorPicker() {
  return <section id="picker">
    {palette.map((clr, i) => <div key={i} style={clr.style} />)}
  </section>;
}
