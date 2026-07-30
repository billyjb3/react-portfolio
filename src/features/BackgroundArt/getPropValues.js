
function getPropValues(props) {
  const values = {};
  Object.entries(props).forEach(([key, value]) => values[key] = value.value);
  return values;
}

export default getPropValues;
