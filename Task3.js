// // Task 1

// var name= "Suraj R";
// let age = 24
// let city = "Banglore"
// const college = "Navkis college of engineering"

// console.log(name)
// console.log(age)
// console.log(city)
// console.log(college)

// name ="Sujith R"
// console.log(name)
// age = 22
// console.log(age)
// // clg = "M.S Ramaya";       //error assignment to constant vaiable

// var name = "Sudeep R";
// console.log(name);
// // let age = 26;                // shows error age is alrady declared
// // const city = "Mysore";       // shows error city is alrady declared
// // const college = "BMS College"; // shows error college is alrady declared



// //Task 2

// console.log("Hello User!");
// alert("User log in");
// confirm("Do you want to continue?");
// let name = prompt("What is your name?");
// document.writeln("user" +name+ "sucessfully logged in");



// //Task 3

// var name= "Suraj R";
// let age = 24
// let city = "Banglore"
// let qualification = "BE in computer science"

// console.log(name)
// console.log(age)
// console.log(city)
// console.log(qualification)



// //Task 4

// let a= "Javascript"
// console.log(a)
// console.log(typeof(a))

// let b=100
// console.log(b)
// console.log(typeof(b))

// let c= 9.5
// console.log(c)
// console.log(typeof(c))

// let d= true
// console.log(d)
// console.log(typeof(d))

// let e=false;
// console.log(e)
// console.log(typeof(e))

// let f= undefined;
// console.log(f)
// console.log(typeof(f))

// let g= null;
// console.log(g)
// console.log(typeof(g))


// //Task 5

// let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
// let n=students.length
// console.log(students[0])
// console.log(students[1])
// console.log(students[n-1])
// console.log(n)


// //Task 6

// let stud = {
//     name: "Suraj R",
//     age : 24,
//     role: "Python Developer",
//     skills : ["HTML","CSS","Javascript","Python","Sql","Django"],
//     isWorking : true,
//     qualification : ["BE","MBA"]
// }
// //let a = stud.qualification.length
// console.log(stud.name)
// console.log(stud.age)
// console.log(stud.skills[0])
// console.log(stud.qualification[stud.qualification.length-1])
// console.log(stud.isWorking)



// //Task 7

// let a = 20;
// let b = 5;

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(a**b)



// //Task 8

// let Shirt = 999
// let Pant = 1499
// let Shoes = 1999
// let Bag = 799

// console.log(Shirt+Pant+Shoes+Bag)



// //Task 9

// // A
// let a = 10;
// let b = a++;

// console.log(a); //11
// console.log(b); //10

// // B
// let c = 10;
// let d = ++c;

// console.log(c); // 11
// console.log(d);// 11

// // C
// let e = 10;
// let f = e--;

// console.log(e); // 9
// console.log(f); // 10

// // D
// let g = 10;
// let h = --g;

// console.log(g); // 9
// console.log(h); // 9



// //Task 10

// let num = 10;

// num += 5;
// console.log(num)
// num -= 3;
// console.log(num)
// num *= 2;
// console.log(num)
// num /= 4;
// console.log(num)
// num %= 3;
// console.log(num)
// num = 10
// num **= 2;
// console.log(num)



// //Task 11

// console.log(10 > 5);   //true
// console.log(10 < 5);   //false
// console.log(10 >= 10); //true
// console.log(10 <= 9);  //false

// console.log(5 == "5");  //true
// console.log(5 === "5"); //false

// console.log(10 != "10");  //false
// console.log(10 !== "10"); //true



// //Task 12

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false



// //Task 13

// console.log(true || true);  //true
// console.log(true || false);//true
// console.log(false || true); //true
// console.log(false || false);// false



// //Task 14

// console.log(!true); // false
// console.log(!false); // true
// console.log(!(5 > 10)); //true
// console.log(!(10 > 5));//false


// // Task 15

// console.log(5 == "5" && !(5 === 5) || 6 > 7);
// // true && false || false
// // false || false 
// // false

// console.log(10 > 5 && 8 < 12 || 4 === "4");
// // true && true || false
// // true || false
// //true

// console.log(7 === 7 && 10 != "10" || 5 >= 5);
// //true && false || true
// //false || true
// //true

// console.log(15 < 10 || 20 > 15 && 5 == "5");
// //false || true && true
// //true && true
// //true



// //Task 16

// let age = 20;
// age >= 18 ? console.log("Eligible to vote") : console.log("Not eligible");



// // Task 17

// let password = true;
// password ? console.log("Login successful") : console.log("Wrong password")



// //Task 18

// let name = "Naveen";
// let age = 25;
// let city = "Trichy";

// console.log("My name is " + name +". I am " + age +" years old. " +"I live in "+ city + "." )
// console.log(`My name is ${name}.I am ${age} years old.I live in ${city}. `)



// // Task 19

// console.log(String(100))
// console.log(typeof(String(100)));

// console.log(String(true))
// console.log(typeof(String(true)))

// console.log(String(undefined))
// console.log(typeof(String(undefined)))

// console.log(String(null))
// console.log(typeof(String(null)))

// console.log([1,2])
// console.log(typeof(String([1,2])));



// // Task 20

// console.log(Number());  //0
// console.log(Number("")); //0
// console.log(Number("123")); //123
// console.log(Number("a1")); //NaN
// console.log(Number(true)); //1
// console.log(Number(false)); //0
// console.log(Number(undefined)); //NaN
// console.log(Number(null)); //0



// //Task 21

// console.log(Boolean()); //false
// console.log(Boolean("")); //false
// console.log(Boolean("hello")); //true
// console.log(Boolean(123)); //true
// console.log(Boolean(true)); //true
// console.log(Boolean(false)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean(null)); //false
// console.log(Boolean([])); //true
// console.log(Boolean({})); //true


// //task 22

// let age = prompt("Enter the age")
// if (age>=18)
// {
//     console.log("you can vote")
// }
// else{
//     console.log("you can't vote")
// }



// //Task 23

// let num=prompt("Enter the number")
// if (num>0){
//     console.log("pasitive")
// }
// else if(num<0){
//     console.log("Negative")
// }
// else{
//     console.log("Zero")
// }



// //Task 24

// let mark = prompt("Enter the mark")
// if(mark>=90 && mark<=100)
// {
//     console.log("A Grade")
// }else if(mark>=80 && mark<=89){
//     console.log("B Grade")
// }else if (mark>=70 && mark<=79){
//     console.log("C Grade")
// }else if(mark>=60 && mark<=69){
//     console.log("D Grade")
// }else{
//     console.log("Fail")
// }



// //Task 25

// let age=19
// let weight=62
// let height= 170

// if(age>=18){
//     if(height>=160){
//         if(weight>=60){
//             console.log("Congratulation!  You are selected")
//         }else{
//             console.log("Weight is below 60")
//         }
//     }else{
//         console.log("height is below 160")
//     }
// }else{
//     console.log("age is below 18")
// }



// //Task 26

// let color = prompt("Enter traffic light color");

// switch (color) {
//     case "red": console.log("Stop");break;
//     case "yellow": console.log("Ready");break;
//     case "green": console.log("Go");break;
//     default: console.log("Invalid color");
// }



// //Task 27

// let day =5
// switch(day){
//     case 1:console.log("Monday");break;
//     case 2:console.log("Tuesday");break;
//     case 3:console.log("Wednessday");break;
//     case 4:console.log("Thursday");break;
//     case 5:console.log("Friday");break;
//     case 6:console.log("Saturday");break;
//     case 7:console.log("Sunday");break;
//     default:console.log("Invalid number")
// }



// //Task 28

// let name = prompt("Enter your name");
// let age = Number(prompt("Enter your age"));
// let city = prompt("Enter your city");
// let tamil = Number(prompt("Enter tamil mark"));
// let english = Number(prompt("Enter english mark"));
// let maths = Number(prompt("Enter maths mark"));

// let total = tamil+english+maths;
// let average = total/3;

// let grade;
// if (average >= 90){
//     grade = "A";
// } else if(average >= 80){
//     grade = "B";
// } else if(average >= 70){
//     grade = "C";
// } else if(average >= 60){
//     grade = "D";
// } else{
//     grade = "Fail";
// }

// let voting;
// if (age >= 18){
//     voting = "Eligible";
// } else{
//     voting = "Not Eligible";
// }

// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);
// console.log(`City: ${city}`);
// console.log(`Total: ${total}`);
// console.log(`Average: ${average}`);
// console.log(`Grade: ${grade}`);
// console.log(`Voting: ${voting}`);

