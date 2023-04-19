const massess = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convertMass(value: number, from: string, to: string): number {
  const fromIndex = massess.indexOf(from);
  const toIndex = massess.indexOf(to);
  const diff = fromIndex - toIndex;
  return value * Math.pow(10, diff);
}