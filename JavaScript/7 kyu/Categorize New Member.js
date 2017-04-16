// Description

// The Western Suburbs Croquet Club has two categories of membership:
// Senior and Open.
// They would likeyour help withan application form that
// will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years oldd and have a handicap
// greater than 7. In this croquet club, handicaps range
// from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a lists containing two items each.
// Each list contais information for a single potential member.
// Information consist of an integer for the persos's age and
// an integer for the perso'n handicap.

// Example input
// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

// Output
// Output will consist of a list of string values (in Haskell: Open or Senior)
// stating whether the respective member is to be placed
// in the senior or open category.

// Example output
// ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {
    return data.map(function(item) {
        if (item[0] >= 55 && item[1] > 7)
            return 'Senior';
        else
            return 'Open';
    });
}
