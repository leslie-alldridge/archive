var tds = document.getElementsByTagName('td');
var total = 0;

function totalCalc(){
for (var i = 0; i < tds.length; i++) {
	if (tds[i].className == 'txtCal'){
		total += isNaN(tds[i].innerHTML) ? 0 : parseInt(tds[i].innerHTML);
}
}
}
document.getElementById("Submit").onclick = totalCalc();
console.log(total);