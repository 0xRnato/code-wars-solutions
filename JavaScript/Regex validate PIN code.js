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