// Description
// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let numbers = [];
    A.forEach(function(itemOnA) {
        let foundedNumber = numbers.find(function(itemOnNumbers) {
            return itemOnNumbers.number === itemOnA;
        });
        if (foundedNumber) {
            foundedNumber.count++;
        } else {
            let newNumber = {};
            newNumber.number = itemOnA;
            newNumber.count = 1;
            numbers.push(newNumber);
        }
    });
    return numbers.find(function(number) {
        return number.count % 2 != 0;
    }).number;
}
