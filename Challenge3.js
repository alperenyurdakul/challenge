//In this challenge, no matter how the first letter of each word in the sentence is written, it will be capitalized.

function capitalizeWords(str) {

    let words = str.split(' ').map(word => {
        let firstLetter = word.slice(0,1);
        let rest = word.slice(1);
        firstLetter = firstLetter.toUpperCase();

        return firstLetter+rest;

    });




    return words.join(' ');

}

console.log(capitalizeWords("I got up early today"));
console.log(capitalizeWords("I walked straight to the beach"));