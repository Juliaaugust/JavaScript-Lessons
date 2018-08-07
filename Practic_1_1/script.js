var userStr = prompt('Enter the string');
var arr = userStr.split('');
console.log(arr);
for(var i=0; i<arr.length; i++){
	if(i%2==0){
		document.write('<div class="even" align="center">' + arr[i]+'</div><br/>');
	} else {
		document.write('<div class="uneven" align="center">' + arr[i]+'</div><br/>');
	}
}