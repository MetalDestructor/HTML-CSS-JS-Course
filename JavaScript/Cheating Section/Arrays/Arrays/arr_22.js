function sequence() {

    var tb1 = document.getElementById("numbers").value;
    var arrayTb1 = tb1.split(","); 

    var getLengthTb1 = arrayTb1.length; 
    var result = document.getElementById("result"); 
    result.innerHTML = "";

    var start = 1;
    var len = 1;
    var bestStart = 0;
    var bestLen = 0;

    for (var i = 0; i < getLengthTb1; i++) {
        start = i + 1;
        if (arrayTb1[i] == arrayTb1[i + 1]) {
            len++;
            if (len >= bestLen) {
                bestLen = len;
                bestStart = start;  
            }
        } else {
            start = 1;
            len = 1;
            
        }
    }
    result.innerHTML = " number " + arrayTb1[bestStart] + " repeats " + bestLen + " times ";
}