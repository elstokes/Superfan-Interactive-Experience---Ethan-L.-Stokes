// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case

// If you want to change an element that is NOT the element just clicked on, you need to identify it by it's "id" (if it's a single element) or by it's "class" (if you're changing multiple elements):
// getElementById() = https://www.w3schools.com/jsref/met_document_getelementbyid.asp
// getElementsByClassName() = https://www.w3schools.com/jsref/met_element_getelementsbyclassname.asp

// Once you've identified the elements you want to change, you can use the "classList" (to change classes) or "innerHTML" (to change the text):
// classList = https://www.w3schools.com/jsref/prop_element_classlist.asp
// innerHTML = https://www.w3schools.com/jsref/prop_html_innerhtml.asp

//The band
function bill(elem){
	elem.classList.toggle("bill_on");
	document.getElementById("bill").classList.toggle("bill");
}
function brann(elem){
	elem.classList.toggle("brann_on");
	document.getElementById("brann").classList.toggle("brann");
}
function brent(elem){
	elem.classList.toggle("brent_on");
	document.getElementById("brent").classList.toggle("brent");
}
function troy(elem){
	elem.classList.toggle("troy_on");
	document.getElementById("troy").classList.toggle("troy");
}

//cool features
function center(elem){
	document.getElementById("bill").classList.remove("bill_on");
	document.getElementById("brann").classList.remove("brann_on");
	document.getElementById("brent").classList.remove("brent_on");
	document.getElementById("troy").classList.remove("troy_on");
	
	document.getElementById("bill").classList.add("bill");
	document.getElementById("brann").classList.add("brann");
	document.getElementById("brent").classList.add("brent");
	document.getElementById("troy").classList.add("troy");
}
