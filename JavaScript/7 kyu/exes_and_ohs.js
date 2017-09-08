// Description

// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contains any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let x = 0;
    let o = 0;
    str = str.split('');
    str.forEach(function(element) {
        if(element == 'x' || element == 'X') x++;
        else if(element == 'o' || element == 'O') o++;
    });
    if(x == o) return true;
    else return false;
}
