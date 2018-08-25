window.onload = function () {
	let a = document.getElementById("inputA");
	let b = document.getElementById("inputB");
	let btnPlus = document.getElementById("btnPlus");
	let btnMinus = document.getElementById("btnMinus");
	let btnMultiply = document.getElementById("btnMultiply");
	let btnDivide = document.getElementById("btnDivide");
	let result = document.getElementById("res");

	console.log(result);

	btnPlus.onclick = function () {
		var sum = parseFloat(a.value) + parseFloat(b.value);
		if (!(isNaN(sum))) {
			result.innerHTML = "<p>" + a.value + " + " + b.value + " = " + sum + "</p>";
			a.value = "";
			b.value = "";
			a.style.outline = null;
			b.style.outline = null;
		} else if ((a.value == "")&&(b.value == "")){
			a.style.outline = "2px solid red";
			b.style.outline = "2px solid red";
		} else if (a.value == "") {
			a.style.outline = "2px solid red";
			b.style.outline = null;
		} else if (b.value == "") {
			b.style.outline = "2px solid red";
			a.style.outline = null;
		}
	};
	btnMinus.onclick = function () {
		var diff = parseFloat(a.value) - parseFloat(b.value);
		if (!(isNaN(diff))) {
			result.innerHTML = "<p>" + a.value + " - " + b.value + " = " + diff + "</p>";
			a.value = "";
			b.value = "";
			a.style.outline = null;
			b.style.outline = null;
		} else if ((a.value == "")&&(b.value == "")){
			a.style.outline = "2px solid red";
			b.style.outline = "2px solid red";
		} else if (a.value == "") {
			a.style.outline = "2px solid red";
			b.style.outline = null;
		} else if (b.value == "") {
			b.style.outline = "2px solid red";
			a.style.outline = null;
		}
	};
	btnMultiply.onclick = function () {
		var mult = parseFloat(a.value) * parseFloat(b.value);
		if (!(isNaN(mult))) {
			result.innerHTML = "<p>" + a.value + " * " + b.value + " = " + mult + "</p>";
			a.value = "";
			b.value = "";
			a.style.outline = null;
			b.style.outline = null;
		} else if ((a.value == "")&&(b.value == "")){
			a.style.outline = "2px solid red";
			b.style.outline = "2px solid red";
		} else if (a.value == "") {
			a.style.outline = "2px solid red";
			b.style.outline = null;
		} else if (b.value == "") {
			b.style.outline = "2px solid red";
			a.style.outline = null;
		}
	};
		btnDivide.onclick = function () {
		var quot = parseFloat(a.value) / parseFloat(b.value);
		if (!(isNaN(quot))) {
			result.innerHTML = "<p>" + a.value + " / " + b.value + " = " + quot + "</p>";
			a.value = "";
			b.value = "";
			a.style.outline = null;
			b.style.outline = null;
		} else if ((a.value == "")&&(b.value == "")){
			a.style.outline = "2px solid red";
			b.style.outline = "2px solid red";
		} else if (a.value == "") {
			a.style.outline = "2px solid red";
			b.style.outline = null;
		} else if (b.value == "") {
			b.style.outline = "2px solid red";
			a.style.outline = null;
		}
	};

};