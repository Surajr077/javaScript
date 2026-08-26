// 1. What is a variable in JavaScript?
//    ans: A variable is a named container used to store data or value.

// 2. What are the three keywords used to create variables?
//    ans: var, let, const.

// 3. Write the syntax to create a variable using var.
//    ans: var variableName = value;

// 4. Write the syntax to create a variable using let.
//    ans: let variableName = value;

// 5. Write the syntax to create a variable using const
//     ans: const variableName = value;

// 6. What is declaration?
//    ans: Declaration means creating a variable without necessarily assigning a value.
//         ex: let age;

// 7. What is initialization?
//    ans: Initialization means assigning a value to a variable when it is created.
//         ex: let age = 25;

// 8. What is reassignment?
//    ans: Reassignment means changing the value of an existing variable.
//     ex: let age = 25;
//         age = 30;

// 9. What is redeclaration?
//    ans: Redeclaration means declaring the same variable again using the same keyword within the same scope.
//     ex: var x = 10;
//         var x = 20;

// 10. Which keyword allows redeclaration?
//     ans: var

// 11. Which keyword allows reassignment?
//     ans: var and let

// 12. Which keyword requires initialization when declared?
//     ans: const

// 13. Identify declaration and initialization
//     let age = 25;
//     ans: Declaration: let age
//          Initialization: = 25

// 14. What is the value of a?
//     var a = 100;
//     console.log(a);
//     ans : 100

// 15. Change the value of this variable to 200:
//     let number = 100;
//     ans: number = 200;

// 16. What will be the output?
//     var a = 10;
//     console.log(a);
//     ans: 10

// 17. What will be the output?
//     var a = 10;
//     a = 20;
//     console.log(a);
//     ans: 20

// 18. What will be the output?
//     var a = 10;
//     var a = 30;
//     console.log(a);
//     ans: 30

// 19. Write a var variable named name with the value "John".
//     ans: var name = "John"; 

// 20. Create a var variable named price with the value 500.
//     ans: var price = 500;

// 21. Reassign price from 500 to 1000.
//     ans: price = 1000;

// 22. What will be the output?
//     var x = 50;
//     x = 100;
//     console.log(x);
//     ans: 100

// 23. Can a var variable be reassigned?
//     Yes

// 24. Can a var variable be redeclared?
//     Yes

// 25. Write an example of var redeclaration.
//     var name = "John";
//     var name = "David";
//     console.log(name);
//     ans: David

// 26. Create a let variable named age with the value 25.
//     ans: let age = 25;

// 27. What will be the output?
//     let age = 20;
//     age = 30;
//     console.log(age);
//     ans: 30

// 28. Can a let variable be reassigned?
//     ans: Yes

// 29. Can a let variable be redeclared?
//     ans: No, not in the same scope.

// 30. Find the error:
//     let name = "John";
//     let name = "David";
//     ans: SyntaxError: Identifier 'name' has already been declared

// 31. Create a let variable called city and assign "Chennai".
//     ans: let city = "Chennai";

// 32. Change the value of city to "Salem".
//     city = "Salem";
//     ans: city = "Salem";

// 33. What will be the output?
//     let x = 10;
//     x = 50;
//     console.log(x);
//     ans: 50

// 34. Write a let variable called salary with the value 25000.
//     ans: let salary = 25000;

// 35. Reassign salary to 30000.
//     ans: salary = 30000;

// 36. Create a const variable called pi with the value 3.14.
//     ans: const pi = 3.14;

// 37. Can a const variable be reassigned?
//     ans: No

// 38. Can a const variable be redeclared?
//     ans: No, not in the same scope.

// 39. What is wrong with this code?
//     const age;
//     age = 25;
//     ans: A const variable must be initialized when declared.

// 40. What happens here?
//     const price = 500;
//     price = 1000;
//     ans: It produces an error because a const variable cannot be reassigned.

// 41. Create a const variable called country with the value "India".
//     ans: const country = "India";

// 42. What will be the output?
//     const x = 100;
//     console.log(x);
//     ans: 100

// 43. Which keyword should you use if the value should not be reassigned?
//     ans: const

// 44. What is the difference between let and const?
//     ans:
//         let                             |           const
//     Can be reassigned                   |    Cannot be reassigned               
//     Can be declared without a value     |    Must be initialized                
//     Cannot be redeclared in same scope  |    Cannot be redeclared in same scope 

// 45. What is the difference between var and const?
//     ans:
//           var                                |        const                           
//     Can be reassigned                        |  Cannot be reassigned               
//     Can be redeclared                        |  Cannot be redeclared in same scope
//     Can be declared without initialization   |  Must be initialized                
//     Function-scoped                          |  Block-scoped                       

// 46. Write JavaScript code to print Hello World using console.log().
//     ans: console.log("Hello World");

// 47. Write JavaScript code to print the number 500 using console.log().
//     ans: console.log(500);

// 48. What is the purpose of console.warn()?
//     ans: Used to display a warning message in the browser console.
//      ex: console.warn("This is a warning");

// 49. What is the purpose of console.error()?
//     ans: Used to display an error message in the browser console.
//      ex: console.error("Something went wrong");

// 50. What is the purpose of each?
//     alert(), prompt(), confirm(), document.writeln(), console.log()
//     ans: alert() : Displays a message in a popup box.
//          prompt() : Asks the user to enter some information.
//          confirm() : Asks the user to confirm something with OK / Cancel.
//          document.writeln() : Writes content directly to the webpage.
//          console.log() : Displays information in the browser's developer console.


// Practical Coding Questions:
// ---------------------------
// 1. Create a variable for student name, age, and mark and print all three.
//     ans:-
//     let studentName = "Suraj";
//     let age = 24;
//     let mark = 85;
//     console.log(studentName);
//     console.log(age);
//     console.log(mark);

// 2. Ask the user's name using prompt() and display it using alert().
//     ans:-
//     let name = prompt("Enter your name:");
//     alert("Hello " + name);

// 3. Ask the user's age using prompt() and print it using console.log().
//     ans:-
//     let age = prompt("Enter your age:");
//     console.log(age);

// 4. Ask the user a question using confirm().
//     ans:-
//     let answer = confirm("Do you want to continue?");
//     console.log(answer);

// 5. Ask the user's name and display it on the webpage using document.writeln().
//     ans:-
//     let name = prompt("Enter your name:");
//     document.writeln("Hello " + name);
    