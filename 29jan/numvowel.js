var a = prompt("enter the name");
var b = a.split("");
//console.log(b.length);

// To know the length of the string.

count = 0;

for(var i=0; i<b.length; i++){
	switch(b[i]) {
	case 'a':
	case 'A':
		count++;
		break;
	case 'e':
	case 'E':
		count++;
		break;
	case 'i':
	case 'I':
		count++;
		break;
	case 'o':
	case 'O':
		count++;
		break;
	case 'u':
	case 'U':
		count++;
		break;
 		}
	}
	console.log(count);