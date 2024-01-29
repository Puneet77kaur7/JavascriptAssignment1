
var textToSpeak = "";
var outputElement = document.getElementById("output");
var synth = window.speechSynthesis;
var speakButton = document.getElementById('speakButton');
var resetButton = document.getElementById('resetButton'); 
var generateRandomStoryButton = document.getElementById('generateRandomStoryButton');

var nouns = ['The turkey', 'Mom', 'Dad', 'The dog', 'The teacher', 'The elephant', 'The cat'];
var verbs =['sat on', 'ate', 'danced with', 'saw', 'does not like', 'kissed'];
var adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var animal= ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes']

function speakNow(string) {
	var utterThis = new SpeechSynthesisUtterance(string);
	synth.speak(utterThis);
}

function resetText() {
    textToSpeak = '';
    updateOutput();
}


speakButton.onclick = function() {
	speakNow(textToSpeak);
}

resetButton.onclick = function () {
    resetText();
};

generateRandomStoryButton.onclick = function() {
    textToSpeak = getRandomWord(nouns) + " " + getRandomWord(verbs) + " " + getRandomWord(adjectives) + " "
                 + getRandomWord(animal) + " " + getRandomWord(places);
    updateOutput();
};


function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function updateOutput() {
    var outputElement = document.getElementById('output');
    outputElement.innerText = textToSpeak;
}

document.getElementById("button1").onclick = function () {
    textToSpeak += getRandomWord(nouns) + " ";
    updateOutput();
};

document.getElementById("button2").onclick = function () {
    textToSpeak += getRandomWord(verbs) + " ";
    updateOutput();
};

document.getElementById("button3").onclick = function () {
    textToSpeak += getRandomWord(adjectives) + " ";
    updateOutput();
};

document.getElementById("button4").onclick = function () {
    textToSpeak += getRandomWord(animal) + " ";
    updateOutput();
};

document.getElementById("button5").onclick = function () {
    textToSpeak += getRandomWord(places) + " ";
    updateOutput();
};

document.getElementById("speakButton").onclick = function () {
    speakNow(textToSpeak);
};
