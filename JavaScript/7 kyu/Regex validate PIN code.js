// Description:

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// eg:

// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false

function validatePIN (pin) {
  //return true or false
  var flag;
  for(var i=0; i<pin.length; i++)
  {
    if(isNaN(pin[i]))
      return false;
    else
      flag = true;
  }
  if((pin.length == 4 || pin.length == 6) && flag)
    return true;
  else
    return false;
}