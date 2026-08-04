
export function getBoundedValue(prop) {
  const { value, min, max } = prop;
  return value > max ? max : value < min ? min : value;
}
