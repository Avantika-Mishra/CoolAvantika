// Write a program to print the nth fibonacci number.Take user input.


var m=prompt("Enter nth number");
m=parseInt(m);
var a=0;
var b=1;
var num=m;
console.log("The first n numbers in fibonacci series are");
for(var i=1;i<=num;i++)
	{
		console.log(b);
		var c=a+b;
		a=b;
		b=c;
		if(i==num-1)
		{
		console.log(b);
console.log("The nth fibonacci number is");
		}		
	
	}