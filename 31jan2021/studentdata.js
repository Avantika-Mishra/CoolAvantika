//Question(filtering): Use the object created in the class.Take a number from the user input and return a list.(Do this in console.log) of all the students who have scored equal to or more than those marks.

var obj = {
    "first_name": "Aayush",
    "last_name": "Sinha",
    "email": "aayush.aryan@me.com",
    "website": "sdfhsdhfjds",
    "k": "This is Key K's value",
    "students": [
	{
	    "name": "Avantika",
	    "marks": 41
	},
	{
	    "name": "Sonali",
	    "marks": 10
	},
	{
	    "name": "Aaru",
	    "marks": 44
	},
	{
	    "name": "Ankita",
	    "marks": 35
	},
	{
	    "name": "Prachi",
	    "marks": 55
	},
        {
	    "name": "Soni",
	    "marks": 23
	},
    ],
};

pass = prompt("Enter marks");
pass = parseInt(pass)

len = obj.students.length

var passed_stu = [];

for (i=0; i<len; i++){
    new1 = obj.students[i];

    if(new1["marks"] >= pass){
        passed_stu.push(new1["name"]);
    }

}

console.log(passed_stu);
