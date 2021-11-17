/*
 * Starter file
 */
(function () {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    encrypt();
  }
  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function encrypt() {
    let encryptButton = document.getElementById('encrypt-it')
    let resetButton = document.getElementById('reset')
    let textArea = document.getElementById('input-text')
    let capsCheck = document.getElementById('all-caps')
    let fontCheck = document.getElementsByName('text-size')
    let cipherType = document.getElementById('cipher-type')
    let resultBox = document.getElementById('result')

    encryptButton.addEventListener('click', () => {
      let userInput = textArea.value
      let encrypted = ''
      if (cipherType.value == 'shift') {
        encrypted = shiftCipher(userInput)
        console.log('shift')
      } else if(cipherType.value == 'random') {
        encrypted = random(userInput)
        console.log('random')
      }
      if (capsCheck.checked) {
        encrypted = encrypted.toUpperCase()
      }
        if (fontCheck[0].checked) {
          resultBox.style.fontSize = 12
        }
        else {
          resultBox.style.fontSize = 24
        }
      resultBox.innerHTML = encrypted
      
    })
    resetButton.addEventListener('click', () => {
      textArea.value = ''
      resultBox.innerHTML = ''
    })
  }

})();

function shiftCipher(text) {
  text = text.toLowerCase();
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] < 'a' || text[i] > 'z') {
      result += text[i];
    } else if (text[i] == 'z') {
      result += 'a';
    } else { // letter is between 'a' and 'y'
      let letter = text.charCodeAt(i);
      let resultLetter = String.fromCharCode(letter + 1);
      result += resultLetter;
    }
  }
  return result;
}
function random(text) {
  text = text.toLowerCase();
  let result = "";
  let num = Math.floor(Math.random() * 15)
  for (let i = 0; i < text.length; i++) {
    result += String.fromCharCode(text.charCodeAt(i) + num)
  }
  return result;
}