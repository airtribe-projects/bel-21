/*
    3 Ways
    - var
    - let

    - const 

    If using var and let variables could be reassigned
    if you use const variable can not be reassigned

*/

const age = 20
let marks = 100
marks = 20
// Errors out due to assignment to constant
// age = 200

const cache = [];

cache[0] = "Jay";

cache[1] = "Chakra"

// cache = {};