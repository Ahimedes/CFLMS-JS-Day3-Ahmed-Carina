function averageGrade(Mathe, Physics, English){
	var sum = Mathe + Physics + English
	var avg = sum / 3
	document.write("Sum: " + sum + "<br>")
	document.write("Average: " + avg)
}

averageGrade(3, 4, 6)
