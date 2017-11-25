// Create an array that contains the words in the sentence
var sentence = [
  "The ", "puppy ", "howled ", "through ", "the ", "smoke ", "in ", "the ", "light ", "of ", "the ", "full ", "moon."
];
var newSentence = "";

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    for (var i = 0; i < sentence.length; i++) {
      newSentence += " ";
      newSentence += sentence[i];

    }
  console.log(newSentence);  
}

// Invoke the function and pass in the array
addExcitement(sentence);
