function box_volume_and_area (width, height, depth) {
	var area = width * height
	var volume = width * height * depth
	document.write("The area of the box is = " + area + "<br>"); 
    document.write ("The volume of the box is = " + volume);
}


box_volume_and_area (20, 25, 10);