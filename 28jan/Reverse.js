/* Questions:- Take input n from user and print all numbers in reverse order.
input-> n=7
output-> 7,6,5,4,3,2,1,0
*/


var a=prompt("Enter n number");
a=parseInt(a);
var i=a;
while(i>=0)
	{
		console.log(i);
		--i;
	}