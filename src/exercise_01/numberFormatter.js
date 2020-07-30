export default function formatNumber(number, option) {
  // This function will format the number to a fixed number string. The decimal part should 2.
  // That means the number 2 will be formatted as '2.00'. The `option` is an object which contains
  // a `currency` property. If the property is `true`, a dollar sign will be added to the result.
  //
  // Your target:
  //
  // * Please implement the function and pass all the tests in format_number_spec.js.
  // * Please do NOT modify the signature of the function.
  let result = '';

  if (option !== undefined) {
    if (option.currency) {
      result += '$ ';
    }
  }

  if (number > 0) {
    let tempNumber = (Math.round(parseFloat(number) * 100) / 100).toString();
    if (tempNumber.length === 1) {
      tempNumber += '.00';
    }
    result += tempNumber;
  }

  return result;
}
