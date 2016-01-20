"use strict";

function doCrypt(isDecrypt) {
	var myShift = 3;
	var myText = document.getElementById("cezar-txt");
	
	if (myText.value.length > 0) {
		if (isDecrypt) myShift = (26 - myShift) % 26;
		myText.value  = myText.value.replace(/\s+/g, '');
		myText.value = caesarCipher(myText.value, myShift);
	}

	else {
		swal("Wystąpił Błąd !", "Wpisz tekst do zaszyfrowania", "error");
	}
}

// shift based on Unicode UTF-8
// http://www.w3schools.com/charsets/ref_utf_basic_latin.asp

function caesarCipher(text, shift) {
	var result = "";

	var begin = Date.now();

		for (var i = 0; i < text.length; i++) {
			var c = text.charCodeAt(i);
			if      (c >= 65 && c <=  90) result += String.fromCharCode((c - 65 + shift) % 26 + 65);  // Uppercase
			else if (c >= 97 && c <= 122) result += String.fromCharCode((c - 97 + shift) % 26 + 97);  // Lowercase
			else                          result += text.charAt(i);  // Copy specials and numbers
		}

	var end = Date.now();

	var timeSpent = (end-begin)/1000 + " secs";

	swal("Operacja wykonana", "Proces trwał: " + timeSpent, "success");

	return result;

}
