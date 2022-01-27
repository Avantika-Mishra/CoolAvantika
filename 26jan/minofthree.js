//Question:- Take 3 numbers from the users and alert minimum of those three numbers.

var a=prompt("Enter first number");
var b=prompt("Enter second number");
var c=prompt("Enter third number");

a=parseInt(a);
b=parseInt(b);
c=parseInt(c);

if(a<b && a<c)
{
alert(a);
}
else if(b<a && b<c)
{
alert(b);
}
else
{
alert(c);
}