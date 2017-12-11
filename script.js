// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case

// If you want to change an element that is NOT the element just clicked on, you need to identify it by it's "id" (if it's a single element) or by it's "class" (if you're changing multiple elements):
// getElementById() = https://www.w3schools.com/jsref/met_document_getelementbyid.asp
// getElementsByClassName() = https://www.w3schools.com/jsref/met_element_getelementsbyclassname.asp

// Once you've identified the elements you want to change, you can use the "classList" (to change classes) or "innerHTML" (to change the text):
// classList = https://www.w3schools.com/jsref/prop_element_classlist.asp
// innerHTML = https://www.w3schools.com/jsref/prop_html_innerhtml.asp

//The band
function bill(elem){ //This function identifies the div with the id "bill" and toggles its class between the "bill" class and the "bill_on" class
	elem.classList.toggle("bill_on"); //This tells the function what class to change the div to
	document.getElementById("bill").classList.toggle("bill"); //This identifies the div by its id and tells the function what class to toggle between
	document.getElementById("bill_sound").play(); //This tells the audio element with the id "bill_sound" to play
}
function brann(elem){ //This function identifies the div with the id "brann" and toggles its class between the "brann" class and the "brann_on" class
	elem.classList.toggle("brann_on"); //This tells the function what class to change the div to
	document.getElementById("brann").classList.toggle("brann"); //This identifies the div by its id and tells the function what class to toggle between
	document.getElementById("brann_sound").play(); //This tells the audio element with the id "brann_sound" to play
}
function brent(elem){ //This function identifies the div with the id "brent" and toggles its class between the "brent" class and the "brent_on" class
	elem.classList.toggle("brent_on"); //This tells the function what class to change the div to
	document.getElementById("brent").classList.toggle("brent"); //This identifies the div by its id and tells the function what class to toggle between
	document.getElementById("brent_sound").play(); //This tells the audio element with the id "brent_sound" to play
}
function troy(elem){ //This function identifies the div with the id "troy" and toggles its class between the "troy" class and the "troy_on" class
	elem.classList.toggle("troy_on"); //This tells the function what class to change the div to
	document.getElementById("troy").classList.toggle("troy"); //This identifies the div by its id and tells the function what class to toggle between
	document.getElementById("troy_sound").play(); //This tells the audio element with the id "troy_sound" to play
}

//additional features
function center(elem){ //This function resets the images of the band members to their original classes. The center image with the onclick id "center(this)" will activate this function when clicked.
	document.getElementById("bill").classList.remove("bill_on"); //This identifies the div with the id "bill" and removes the "bill_on" class
	document.getElementById("brann").classList.remove("brann_on"); //This identifies the div with the id "brann" and removes the "brann_on" class
	document.getElementById("brent").classList.remove("brent_on"); //This identifies the div with the id "brent" and removes the "brent_on" class
	document.getElementById("troy").classList.remove("troy_on"); //This identifies the div with the id "troy" and removes the "troy_on" class
	
	document.getElementById("bill").classList.add("bill"); //This identifies the div with the id "bill" and adds the "bill" class
	document.getElementById("brann").classList.add("brann"); //This identifies the div with the id "brann" and adds the "brann" class
	document.getElementById("brent").classList.add("brent"); //This identifies the div with the id "brent" and adds the "brent" class
	document.getElementById("troy").classList.add("troy"); //This identifies the div with the id "troy" and adds the "troy" class
}

function pause(elem){ //This function pauses the audio. The element with the onclick id "pause(this)" will activate this function when clicked.
	document.getElementById("sample").pause(); //This identifies the audio element with the id "sample" and pauses the audio
}

function play(elem){ //This function resumes the audio from the point where it was paused and from the beginning if it plays all the way through. The element with the onclick id will activate this function when clicked.
	document.getElementById("sample").play(); //This identifies the audio element with the id "sample" and plays the audio from the point when it was last paused or from the beginning if it stopped
}

function replay(elem){ //This function resets the audio to its starting position. The element with the onclick id "replay(this)" will activate this function when clicked.
	document.getElementById("sample").currentTime = 0; //This identifies the audio element with the id "sample" and sets the audio at its starting point wihtout stopping it
	//source for replay function: https://stackoverflow.com/questions/17636310/play-audio-and-restart-it-onclick
}
