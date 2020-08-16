// get a fake data package
const faker = require("faker");

function get_words(numWords) {
  words = [];

  // generate all the words
  for (; numWords > 0; numWords--) {
    // generate a random word and remove all spaces
    word = faker.fake("{{random.word}}").split(" ")[0];

    // remove possible hyphenation
    word = word.split("-")[0];

    // make the word lower case and add it to the array of words
    words.push(word.toLowerCase());
  }

  return words;
}

// generate a specified number of words from the words_alpha.txt file
// each word should average 5 characters
module.exports = {
  words: function words(n) {
    get_words(n);
  }
};

// console.log(get_words(200));
