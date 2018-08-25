window.onload = function () {
	let justBtn = document.getElementById("justBtn");
	let toZero = document.getElementById("toZero");
	let countClick = document.getElementById("countClick");

	var counter = 0;

	justBtn.onclick = function () {
		counter += 1;
		countClick.innerHTML = counter;
	};
	toZero.onclick = function () {
		counter = 0;
		countClick.innerHTML = counter;
	}
	
};