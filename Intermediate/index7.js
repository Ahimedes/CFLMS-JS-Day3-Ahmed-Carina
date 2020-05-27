function capitalize(string){
	var firstLetter = string.charAt(0);
	var uppercase = firstLetter.toUpperCase();
	var rest = string.slice(1)
	var total = uppercase + rest
	
	document.write(total)
}

capitalize("tea");
