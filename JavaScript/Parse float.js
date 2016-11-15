function parseF(s) {
  var output;
  
  if(isNaN(parseFloat(s)))
    output = null;
  else
    output = parseFloat(s);
  
  return output;
}