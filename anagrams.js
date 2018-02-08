// A clever alternative method for not including the matching dictionary word to the text input that David showed me.

// function unless(boolean, func) {
//     if (boolean !== true) {
//         func()
//     }
// }

// unless (typedText === words[i], function() {
//     destination.appendChild(text);
// })

function alphabetize(input) {
    return input.toLowerCase().split("").sort().join("").trim();
}

document.getElementById("findButton").onclick = function () {
   
    // clears any previous output every time the button is clicked
    document.getElementById("output").innerHTML = "";
    
    // this code returns the value of the element with Id="input" and stores it in variable typedText
    let typedText = document.getElementById("input").value;
    
    //this for loop will iterate from 0 to array words.length
    for (i = 0; i < words.length; i++) {


        //this function alphabetizes the "typedText" input from the user and stores the new string in var alphInput
        let alphInput = alphabetize(typedText);

        // alphabetizes the current word from words.js and stores the new string in var alphWord
        let alphCurrentWord = alphabetize(words[i]);

        // retrieves an Element by Id for the purpose of having a destination to append text to later.
        var destination = document.getElementById("output");

        //creates the text node to display as output
        var text = document.createTextNode(words[i] + "  ");

        

        // nested 'if statements' that set the conditions under which the text node will be appended to the destination.
        if (alphInput === alphCurrentWord) {

            if (typedText !== words[i]) {

                destination.appendChild(text);
            }



        }

    }
}