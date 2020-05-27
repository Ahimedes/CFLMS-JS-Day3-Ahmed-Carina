function Product(){
	var i;
	var prod = 1;
	for (i = 1; i <= arguments.length; i++) {
		prod *= arguments[i];
		document.write(prod)
	}
	return prod;

}

Product(10, 10, 10)
