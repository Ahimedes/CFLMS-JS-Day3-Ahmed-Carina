function box_volume_and_area (width, height, depth) {

var area = width * height
var volume = width * height * depth

var result = [area, volume];

 	return result;
}
 
 document.write("The area of the box is = " + box_volume_and_area(20,25)[0] + "<br>"); 
 document.write ("The volume of the box is = " + box_volume_and_area(20,25,10)[1]);

