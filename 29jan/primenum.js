//Assignment 2: -> User enters a number, check and tell whether that number is a prime number or not. (If user enters, abcd. You handle that situation).



var n=prompt("Enter a number");
n=parseInt(n);

if(isNaN(n))
{
alert("Please enter valid number");
}
else if(n%2 == 0) 
{
	console.log("Number is not prime");
}
else
{
	console.log("Number is prime");
}
