var userStr = prompt('Enter the string');
var arr = userStr.split('');
console.log(arr);
for(var i=0; i<arr.length; i++){
	document.write(arr[i]+'<br/>');
}