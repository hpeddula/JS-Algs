const flatten = (input) => {
  return input.reduce(
    (acc, val, i) => acc.concat(Array.isArray(val) ? flatten(val) : val),
    []
  );
};

let flatArray = arr.reduce((acc, curVal) => {
  return acc.concat(curVal)
}, []);
