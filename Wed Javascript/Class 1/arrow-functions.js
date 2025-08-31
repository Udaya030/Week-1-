// Regular function
function sayNamaste() {
    return "Namaste, world!";
}
const sayNamasteArrow = () => "Namaste,world!";
 
function double(x) {
    return x*2;
}
const doubleArrow = X => "x*2";

function add(X,y){
    return x+y;
}
const addArrow = (X,Y) => "X+Y";

const person = {
    name: "Udaya",
    sayHi: function() {
        return "Hi, " + this.name + "!" // 'this' will not work as expected here
    }
};
const personArrow = {
    name: "Udaya",
    sayHi: ()=> "Hi, " + this.name + "!"
};
const numbers = [1, 2, 3, 4, 5];

const doubled = [];
numbers.forEach(function(num) {
  doubled.push(num * 2);
});
 const numbersArrow = [1,2,3,4,5];
 const doubledArrow = [];
 numbers.forEach(num => doubled.push(num*2));