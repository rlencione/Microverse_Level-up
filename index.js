/*Level #1 Video #4 - Variables

let username = "Oscar";
console.log("Helo", username, "how are you?");

let totalapple = 20;
let totalUser = 5;

let applesperuser = totalapple / totalUser;
console.log("You have", applesperuser, "apples at this moment");
____________________________________________________________________________
Level #1 Video #5 - Declarating variables JS

let country = "Brasil";
console.log(country);
console.log("country");

let myName = "Roberto Garcia";
console.log("My name is", myName);
____________________________________________________________________________
Level #1 Video #7 - Data types

let string = "Brasil";
let interger = 2022;
let bol = true;

console.log(string, interger, bol);
____________________________________________________________________________
Level #1 Video # - Underfined and null

undefined - a variable has been declared but has not been assigned;
underfine is false;
Data type - underfined;
console.log(typeof undefined);
var n;
let p;
console.log(n, p);

in arithmetic undefined will result a null

var a = 100;
var b = 15;
var c;

function under(){
  var ex = (a + b + c);

  return ex
}
console.log(under());

/*null - is an object - can be assigned to a variable as a representatio value; 
null is false;
Data type - object 

console.log(typeof null);
var m = null;
let o = null;
console.log(m, o);

var a = 100;
var b = 15;
var c = null;

function nu(){
  var ex = (a + b + c);

  return ex
}
console.log(nu());

var t, a = 100;

if (t) {
  console.log("t is defined");
} else if (a) {
  console.log("a is defined");
} else {
  console.log("both t and a are not defined");
} 
____________________________________________________________________________
Level #1 Video #10 - Moidifying variables

let myName = "Roberto";
myName = "Johnson";
lastName = "Siqueira";
fullName = myName + lastName;

console.log("Meu nome inteiro eh" + " " + fullName);

let myNumber = 5;
//myNumber = myNumber + 5;   or
myNumber += 15;
console.log(myNumber)
____________________________________________________________________________
Level #1 Video #12 - Final assesment 
//Ex01
var a;
a = 7;
console.log(a);

//Ex02
var a;
a = 7;
var b;
b = a;
console.log(b);
______________________________________________________________________________
Level #2 Video #8 -basic operator JS 
let n = 5;
console.log(n);
n += 5;
console.log(n);
n *= 5;
console.log(n);
n **= 5;
console.log(n);
n %= 5;
console.log(n);

short handle ++ and -- only
n ++;
n ++;
n ++;
n --;
console.log(n);

Ex
let a = 4 + 7;
let b = 5 * 9;
let c = b / a;
console.log(c);
______________________________________________________________________________
Level #2 Video #10 - if-the-else

let myApples = 5;
myApples += 10;
console.log("I have", myApples + " "  + "Apples");

let sansung = 15;
if(sansung === 10){
  sansung += 20;
  console.log(sansung);
} else {
  sansung = 0;
  console.log("I have", sansung, "sansung");
}

______________________________________________________________________________
Level #2 Video #11 - condocional statments

if - to execute a block if condotion is true
  else - to execute a block if same condotion is false
    else if - to execute a new block if condotion is true
      switch - to execute many alternative blocks

Sintax if/else
if(condition){
  code block to be executed
}

let hour = 22.3;

if(hour < 8){
  console.log("goodmorning");
} else if(hour > 19){
  console.log("goodnight");
} else {
  console.log("goodevening");
}

Sintax swutch

switch(expression){
  case x:
    code block;
    break;
  case y:
    code block;
    break;
  default:
    code block;
}
______________________________________________________________________________
Level #2 Video #12 - Exercise

let x = 9;

if(x == 9){
  console.log("True");
} else {
  console.log("False");
}

let y ="yellow"

if (y == "Blue"){
  console.log("Blue detected");
} else if (y === "Green"){
  console.log("Green detected");
} else {
  console.log(" No Blue or Green detected");
}
______________________________________________________________________________
Level #2 Video #13 - More comparison types

const { equal } = require("assert");
const { type } = require("os");

let num = 9;
/*==  iqual to
  === iqual vaule and type
  !=  not equal
  !== not equal value and type

if(num !==7){
  console.log("Not seven");
} else {
  consoel.log("Lucky number seven");
}
______________________________________________________________________________
Level #2 Video #15 - Exercise

let n = 55;
if(n > 45 && n < 65){
  console.log(n);
}else{
}
______________________________________________________________________________
Level #2 Video #16 - while loop
//simple loop

let  i = 0;
while (i < 8){
console.log(i);
i++;
}

let  h = 0;
while (h < 8){
h++;
console.log(h);
}

let  f = 0;
while (f < 8){
f++;
}
console.log(i);
_____________________________________________________________________________
Level #2 Video #17 - Exercise

let  i = 2;
while (i < 10){
console.log(i);
i++;
}
______________________________________________________________________________
Level #2 Video #18 - for loop

for(let i = 2; i < 10; i++){
  console.log(i);
}

for(let h = 2; h < 10; h++){
  // doesnt work becouse h is inside loop
 }
console.log(h);
_____________________________________________________________________________
Level #2 Video #20 - arrays

let arr = []; //array undefined (empty)

let array = ["apple", "orange", "banana", 77, 88];
// array index
console.log(array[1]);
______________________________________________________________________________
Level #2 Video #22 - arrays whit for loop and  if - elese

let ar = [];
for(let i = 8; i < 16; i++){
  ar.push(i);
}
console.log(ar);
console.log(ar[3]);

//found numbers menor than 7

let ari = [1, 9, 5, 55, 15, 14, 6, 3, 7, 18, 34];
let len = ari.length;
for(let i = 0; i < len; i++){
  if(ari[i] < 7 ){
    console.log(ari[i])    
  }
}
______________________________________________________________________________
Level #2 Video #22 - arrays whit for loop and  if - eles*/

















