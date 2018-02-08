'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$("a.changeName").click(nameClick);
}

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}




	if (name == "Notable Grudge") {
		return "Doug Engelbart";
	} 
	else if (name == "Vandal Heist Run") {
		return "Ivan Sutherland";
	}
	else if (name == "Crick Rid Jell") {
		return "JCR Licklider";
	}
	else if (name == "Ravens Van Hub") {
		return "Vannevar Bush";
	}
	else if (name == "Canal Yak") {
		return "Alan C. Kay";
	}
	else if (name == "Ellen All New") {
		return "Allen Newell";
	}
	else if (name == "Lunacy Chums") {
		return "Lucy Suchman";
	}
	else if (name == "Gear Chopper") {
		return "Grace Hopper";
	}


	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}






function nameClick(e) { 
    // prevent the page from reloading      
  
    // In an event handler, $(this) refers to      
    // the object that triggered the event  

    // retrieve the name
    var name = $(this).text();
    console.log(name);
    // call function
    $(this).text(anagrammedName(name));
     e.preventDefault();
}