// JavaScript Tasks


// Task-1:
var studentName = "Suraj R";
let studentAge = 24;
const collegeName = "Navkis Engineering College";

// 1. Printing all three values
console.log(studentName);
console.log(studentAge);
console.log(collegeName);

// 2. Changing var
studentName = "Sujith R";
console.log(studentName);

// 3. Changing let
studentAge = 23;
console.log(studentAge);

// 4. Changing const --> gives an error because const cannot be changed
// collegeName = "Govt Engineering College";
// console.log(collegeName)

// 5. Redeclaring var
var studentName = "Sudeep R";
console.log(studentName);

// 6. Redeclaring let -->gives an error because let cannot be redeclared
// let studentAge = 25;



// Task-2:
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let city = prompt("Enter your city:");

console.log("name:", name);
console.log("age:", age);
console.log("city:", city);



// Task-3: 
let name1 = prompt("Enter your name:");
alert("Welcome" +" "+ name1 + "!");



// Task-4:
let birthYear = prompt("Enter your birth year:");
let currentYear = 2026;
let age1 = currentYear-birthYear;
console.log("Birth Year:", birthYear);
console.log("Age:", age1);



// Task-5:
let a = "Hello";
let b = 100;
let c = 25.5;
let d = true;
let e = false;
let f = undefined;
let g = null;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);



// task-6
var studentData = {
    name : 'Suraj R',
    age : 24,
    city : 'Bangaluru',
    qualification : "B.E",
    isStudent : true
};

console.log(studentData);
console.log(studentData.name);
console.log(studentData.age);
console.log(studentData.qualification);
console.log(studentData.isStudent);



// Task-7:
let fruits = ["Apple","Mango","Orange","Banana","Grapes","Papaya"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);



// Task-8:
let x = 20;
let y = 5;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);



// Task-9:
var shirt = 999;
var pant = 1499;
var shoes = 1999;

console.log('Total:' +" "+ (shirt+pant+shoes));



// Task-10:
var tamil = 80;
var english = 75;
var maths = 90;

console.log('Total:' +" "+ (tamil+english+maths));
console.log('Average Marks:' +" "+ ((tamil+english+maths) / 3));



// task-11
// let a = 10;
// let b = a++;

// // Expected output : a = 11, b = 10
// console.log(a);
// console.log(b);



// task-12
// let a = 10;
// let b = ++a;

// // Expected output : a = 11, b = 11
// console.log(a);
// console.log(b);



// task-13
// let a = 20;
// let b = a--;

// // Expected output : a = 19, b = 20
// console.log(a);
// console.log(b);



// task-14
// let a = 20;
// let b = --a;

// // Expected output : a = 19, b = 19
// console.log(a);
// console.log(b);



// task-15
// let a = 5;
// let b = a++;
// let c = ++a;
// let d = b--;

// // Expected output : a = 7, b = 4, c = 7 ,d = 5
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);



// task-16
// let num = 10;
// num += 5;
// num -= 5;
// num *= 5;
// num /= 5;
// num %= 5;
// num **= 5;
// console.log(num);



// task-17
var studentData = {
    name : 'Suraj R',
    age : 24,
    city : 'Bangaluru',
    subjects : ['Kannada','english','maths','science','social'],
    isStudent : true
};

console.log(studentData.name);
console.log(studentData.age);
console.log(studentData.city);
console.log(studentData.subjects[1]);
console.log(studentData.subjects[studentData.subjects.length-1]);
console.log(studentData.subjects.length);
console.log(studentData);



// Final Challenge
var value1 = Number(prompt("Enter A Value"));
var value2 = Number(prompt("Enter B Value"));

console.log(value1+value2);
console.log(value1-value2);
console.log(value1*value2);
console.log(value1/value2);
console.log(value1%value2);
console.log(value1**value2);