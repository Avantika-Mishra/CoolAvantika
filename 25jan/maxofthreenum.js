//Question:- Take 3 numbers and write a program to find maximum of those 3 numbers.

var a=prompt("Enter first number");
var b=prompt("Enter second number");
var c=prompt("Enter third number");

if(a>b && a>c)
{
alert("The greater number is a");
}
else if(b>a && b>c)
{
alert("The greater number is b");
} 
else
{
alert("The greater number is c");
}