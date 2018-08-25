window.onload = function () {
	var text = document.querySelector("#text");
	var str = text.innerHTML;
	text.innerHTML = "";
	for (var i = 0; i < str.length; i++){
		// var letter = [];
		// letter[i] = "<span>" + str[i] + "</span>";
		// text.innerHTML += letter[i];
		// letter[i].style.color = "rgb("+r + "," + g + ","+ b + ")";

		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);

		var span = document.createElement("span");
		span.textContent = str[i];
		span.style.color = "rgb("+r + "," + g + ","+ b + ")";
		text.appendChild(span);
		
	}
};