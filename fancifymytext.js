function applyStyles() {
    var textInput = document.getElementById("textInput");
    var fancyShmancyRadio = document.getElementById("fancyShmancy");
    
    if (fancyShmancyRadio.checked) {
        // Apply fancy styles
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
        textInput.style.fontFamily = "Comic Sans MS"; // Just an example, you can modify this
        textInput.style.backgroundColor = "yellow"; // Just an example, you can modify this
    } else {
        // Remove styles
        textInput.style.fontWeight = "normal";
        textInput.style.color = "";
        textInput.style.textDecoration = "";
        textInput.style.fontFamily = "";
        textInput.style.backgroundColor = "";
    }
}

function showAlert() {
    alert("Hello, world!");
}

function makeBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
    showAlert();
}

function makeTextUppercase() {
    var textInput = document.getElementById("textInput");
    var text = textInput.value;

    // Split text into sentences
    var sentences = text.split('. ');

    // Iterate over each sentence
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(' ');
        var lastWordIndex = words.length - 1;

        // Add "-Moo" to the last word of each sentence
        if (words[lastWordIndex] !== "") { // Check if last word is not empty
            words[lastWordIndex] += "-Moo";
        }

        // Join words back together to form the sentence
        sentences[i] = words.join(' ');
    }

    // Join sentences back together with periods and update text area value
    textInput.value = sentences.join('. ');
}

