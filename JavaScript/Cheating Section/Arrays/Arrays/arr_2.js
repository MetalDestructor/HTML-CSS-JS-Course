
function compare() {
	var arr_a = document.getElementById("input_a").value;
	var arr_b = document.getElementById("input_b").value;
	var length_a = arr_a.length;
	var length_b = arr_b.length;
	if (length_a < length_b) { 
		alert('a < b'); 
	 
	 if (length_a > length_b) { 
		alert('a > b'); 
	}
	}
	else { 
		alert('a = b');
	}
}
