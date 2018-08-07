var html = "<ul>";
var listItem = prompt('Enter the list item');

while((listItem != null)) {
	//without empty items
	if(listItem != "") {
		html += "<li>" + listItem + "</li>";
	}
	listItem = prompt('Enter the list item');
}
html += "</ul>";
document.write(html);