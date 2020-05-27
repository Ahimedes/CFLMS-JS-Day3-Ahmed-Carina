function ageCalculator(currentYear, yearOfBirth){
	return currentYear - yearOfBirth	
}
	
var option1 = ageCalculator(2020, 1992);
var option2 = ageCalculator(2020, 1992) - 1;
document.write("You are either " + option1 + " or " + option2 + " years old.");

