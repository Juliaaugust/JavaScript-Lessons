window.onload = function () {
	let justBtn = document.getElementById("justBtn");
	let toZero = document.getElementById("toZero");
	let infoClick = document.getElementById("infoClick");

	var counter = 0;

	justBtn.onclick = function () {
		counter += 1;
		infoClick.innerHTML = "Столько раз на меня кликнули: "+ counter;
	};
	toZero.onclick = function () {
		counter = 0;
		infoClick.innerHTML = "Столько раз на меня кликнули: "+ counter;
	}
	
};