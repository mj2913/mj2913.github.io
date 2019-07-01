function myFunction() {
  /*declaring popup variable*/
  var popup = document.getElementById("happyPopup");
  popup.classList.toggle("show");
}

/*storing multiple emotion values in one variable using arrays*/
var emotionsArray = [
  "happy",
  "sad",
  "surprised",
  "anxious",
  "fearful",
  "confident",
  "tired",
  "joyful",
  "discouraged",
  "pitiful",
  "impatient",
  "cautious",
  "unloved",
  "hopeless",
  "confused",
  "stressed"
];

/*establishing element variables*/
var inputElement = document.getElementById("suggestions");
var errorElement = document.getElementById("error");
var wordsElement = document.getElementById("words");

/*creating function for adding words and sending error message if entry is blank*/
function addWord() {
  errorElement.innerHTML = "";
  var words = inputElement.value;
  if (words.trim() === "") errorElement.innerHTML = "Empty input";
  else emotionsArray.push(words);
  inputElement.value = "";
}

/*adding new words to array*/
function submit() {
  words.innerHTML = emotionsArray.join(" - ");
}