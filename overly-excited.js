// Create an array that contains the words in the sentence
let sentence = [
  "The ", "puppy ", "howled ", "through ", "the ", "smoke ", "in ", "the ", "light ", "of ", "the ", "moon"
];
let newSentence = "";

// The addExcitement function should accept the array as the sole argument
function addExcitement (newSentence) {
    for (let i = 0; i < sentence.length; i++) {
      newSentence += " ";
      newSentence += sentence[i];
      if ((i+1) % 3 === 0) {
        newSentence += "!";
      }
      if ((i+1) % 6 === 0) {
        newSentence += "!";
      }
      if ((i+1) % 9 === 0) {
        newSentence += "!!";
      }
      if ((i+1) % 12 === 0) {
        newSentence += "!!";
      }
      console.log(newSentence);
    }  
}


// Invoke the function and pass in the array
addExcitement(newSentence);



