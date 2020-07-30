export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (!array) {
    throw new Error('Flatten undefined or null array');
  }
  const res = [];
  array.forEach((cur) => {
    if (cur instanceof Array) {
      res.push(...cur);
    } else {
      res.push(cur);
    }
  });
  return res;
}
