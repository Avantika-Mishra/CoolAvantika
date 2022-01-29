//Question:- Take the input from the user.It has to be dynamic.I can enter 3 number as well as 30 numbers.It should give me the maximum of all of them.We will be using Array as the underlying data structure.

var totalnum=prompt("Enter total Numbers taken by the user");
totalnum=parseInt(totalnum);
var arr=[];

for(var i=0;i<totalnum;i++)
{
	var value=prompt("Enter "+i+" value");
	arr.push(value);
}
console.log(arr);
var maximum=arr[0];

for(var i=0;i<totalnum;i++)
{
		if(arr[i]>maximum)
	{
			maximum=arr[i];
	}

}
alert("The maximum number is" +max);
console.log(maximum);