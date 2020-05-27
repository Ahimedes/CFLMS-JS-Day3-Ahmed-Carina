function ageCalculator(yearOfBirth){
	return 2020 - yearOfBirth	
}
	
var option1 = ageCalculator(1992);
var option2 = ageCalculator(1992) - 1;
document.write("You are either " + option1 + " or " + option2 + " years old.");
