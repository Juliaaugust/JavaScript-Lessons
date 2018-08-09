var userStr = prompt('Enter the string');
var arr = userStr.split('');
console.log(arr);
for(var i=0; i<arr.length; i++){

	switch(arr[i]) {
		case ' ': document.write('<div class="space"> </div> ');
		break;

		default:
		if(i%2==0){
			document.write(' <div class="even" align="center">' + arr[i]+'</div> ');
		} else {
			document.write(' <div class="uneven" align="center">' + arr[i]+'</div> ');
		}
	}
}