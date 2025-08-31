// 1. Cube function
function cube(x) {
  return x * x * x;
}

// 2. Full name function
function fullName(first, last) {
  return first + " " + last;
}

// 3. Power function (recursive)
function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

// 4. Sum of cubes
function sumCubes(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}

// Message examples
let message = 'Hi there!';
console.log(message);

const showMessage = function () {
  return 'Hi there!';
};
console.log(showMessage());

function showMessageFn() {
  return 'Hi there!';
}
console.log(showMessageFn());

// Loop through values
let values = [10, 20, 30];
for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}

// Welcome message
let lastLogin = '1/1/1970';
function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`;
}
console.log(welcome('Charlie', 'Munger'));
