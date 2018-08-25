var numOfHours = parseInt(prompt('Сколько часов прошло?'));
var numOfAmoebas = 1;

while(numOfHours >= 3) {
	numOfAmoebas *= 2;
	numOfHours -= 3;
}

if ((!(numOfHours < 3))&&(numOfAmoebas == 1)) {
		alert('Вы ввели какую-то ерунду!\nПопробуйте ещё');
} else { 
	if (numOfAmoebas < 20) {
		alert('Количество амёб теперь: ' + numOfAmoebas);
		alert('Что-то мало амёб у вас получилось!');
	} else if (numOfAmoebas > 3000) {
		alert('Количество амёб теперь: ' + numOfAmoebas);
		alert('Как много амёб теперь!');
	} else {
	alert('Количество амёб теперь: ' + numOfAmoebas);
	}
}