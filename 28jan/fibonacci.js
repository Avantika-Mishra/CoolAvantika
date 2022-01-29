/*Question:- Print the first n numbers of a fibonacci series.
0,1,1,2,3,5,8,13,21,34,55
*/


var m=prompt("Enter n numbers");
m=parseInt(m);
var a=0;
var b=1;
 console.log(a);
var num=10;
for(var i=1;i<=num;i++)
	{
		
		console.log(b);
		var c=a+b;
		a=b;
		b=c;
		
	}

