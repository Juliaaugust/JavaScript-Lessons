var namesArr = ['Юлия', 'Ольга', 'Ксения', 'Екатерина', 'Марина', 
'Полина', 'Светлана', 'Елена', 'Татьяна', 'Людмила', 'Олег', 
'Петр', 'Василий', 'Михаил', 'Леонид', 'Максим', 'Денис', 
'Александр', 'Андрей', 'Алексей'];

// var userName = prompt('Введите ваше имя').toUpperCase();
// var inList = false;

// for (var i = namesArr.length - 1; i >= 0; i--) {
// 	if(namesArr[i].toUpperCase() == userName) {
// 		inList = true;
// 	}
// }

// if (inList == true) {
// 	alert('Поздравляем! Ваше имя есть в списке');
// } else {
// 	alert('Вашего имени нет в списке\nПопробуйте еще');
// }
var userName = prompt('Введите ваше имя');
if (namesArr.indexOf(userName) != -1) {
	alert('Поздравляем! Ваше имя есть в списке');
} else {
	alert('Вашего имени нет в списке\nПопробуйте еще');
}