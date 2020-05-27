function averageGrade(Mathe, Physics, English){
	var sum = Mathe + Physics + English
	var a = sum / 3
	var avg = a.toFixed(0);
	document.write("Sum: " + sum + "<br>")
	document.write("Average: " + avg)
}

averageGrade(3, 5, 5)
