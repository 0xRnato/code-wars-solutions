// Description:

// Write function parseFloat (for Javascript parseF) which takes a string
// and returns a number or Nothing (for Python None, for Javascript null)
// if conversion is not possible.

function parseF(s) {
  let output;

  if(isNaN(parseFloat(s)))
    output = null;
  else
    output = parseFloat(s);

  return output;
}
