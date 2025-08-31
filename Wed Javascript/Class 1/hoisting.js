 // function declaration
function square(x) {
  return x * x;
}
// function declaration
function cube(x){
    return x*x*x;
}

// function expression
const cube = function(x) {
  return x * x;
};// 1.
function cube(x) {
  return x * x * x;
}

// 2.
function fullName(first, last) {
  return first + " " + last;
}

// 3.
function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

// 4.
function sumCubes(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}
console.log(message);
var message = 'What,s Up!';

console.log(showmessage());s
 const showmessagge =function(){
    return'What,s Up!';
 };
 console.log(showmessage());
 function showmessage(){
    return 'What,s Up!';
 }
 // 1.
for(let i = 0; i < values.length; i++){
  console.log(values[i]);
}

let values = [10, 20, 30];
// 2.
let lastLogin = '1/1/1970';
console.log(welcome('Charlie', 'Munger'));
function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};
