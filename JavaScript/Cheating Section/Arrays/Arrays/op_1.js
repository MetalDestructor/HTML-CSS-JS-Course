function check() {
	var a;
	a= document.getElementById('number').value ;

	if (a%2 == 0) { 
		alert ('The number is even!');
	
	} if(a%2 == 1) {
		alert ('The number is odd!');
	}
	else {
	alert ('Enter a NUMBER');
	}
}

