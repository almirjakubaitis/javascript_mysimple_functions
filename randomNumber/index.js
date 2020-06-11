function randomNumber(digits) {

const codeNumber =
    `${Math.floor( Math.random() * ('9'.repeat(digits)) )}`
    .padStart(digits, '1');

    return parseInt(codeNumber, 10);
}

// create a number with digits
// fill with the number 1 when less than asked digits
// final result is a number

// Example:
// console.log(randomNumber(5));
// return 85780 (random)
