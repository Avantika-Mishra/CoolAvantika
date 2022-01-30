//Question2:-Write a program to print all prime numbers in range 1 to n.Take n from users.


let n = prompt("Enter a number");
n = parseInt(n)
for (i = 1; i <= n; i++) {
  let a = 1;
  let b = 2;

  while (b < i) {
    if (parseInt(i % b) == 0) {
      a = 0;
      break;
    }
    b++;
  }
  if (a == 1) {
    console.log("Number is prime:" + i);
  }
}