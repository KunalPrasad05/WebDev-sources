// alert("kunaal with fenii");

/* Object
const Profile = {
    username: "shradhakhapra",
    name: "Shradha Khapra",
    Followers: 569000,
    posts: 195,
    Following: 4,
    BIO: "Apna College",
    Bluetick: true,
    followed: false,
    profession: "entrepreneur"
} */

// This is a single line comment 


// arithmetic operators

// let a= 5;
// let b= 2;
// let c = a + b;
// console.log("a = " ,a, " & b = ", b);
// console.log("a + b = ", c);
// console.log("a - b = ", a-b);
// console.log("a * b = ", a*b);
// console.log("a / b = ", a/b);
// console.log("a % b = ", a%b);//Modulus
// console.log("a ^ b = ",a**b );// Exponentiation

// Unary operator
// let a= 5;
// let b= 2;
// Post increment & Decrement
// a++m
// console.log("a = ", a);//INCREMENT
// console.log("b = ", b);
// Pre increment & Decrement
// ++a;
// --b;

// console.log("a = ", a);//INCREMENT
// console.log("b = ", b);



// If Statements: 

// let day = 7;

// if(day === 1) {
//     console.log("Sunday")
// } else if (day === 2) {
//     console.log("Monday")
// } else if (day === 3) {
//     console.log("Tueday")
// } else if (day === 4) {
//     console.log("Wedday")
// } else if (day === 5) {
//     console.log("Thursday")
// } else if (day === 6) {
//     console.log("Friday")
// } else if (day === 7) {
//     console.log("Saturday")
// } else {
//     console.log("Invalid number entered! enter number between 1 to 7.")
// }

//  Ternary Operators
// let age = 17;
// age >= 18 ? console.log("Adult"): console.log("Not Adult"); // simple or compact statements
// let result = age >= 18 ? "Adult": "Not Adult";

// console.log(result);

// PROMPT for input--->

// let num = prompt("enter a number: ");

// if (num%5 === 0) {
//     console.log(num, "It can divided by 5")
// } else {
//     console.log(num, "Its not divisible by 5")
// }

// Grades to student-->

// let marks = prompt("Enter your marks: ");

// if(marks>=80 && marks<=100) {
//     console.log("A");
// }
// else if(marks>=70 && marks<=89) {
//     console.log("B");
// }
// else if(marks>=60 && marks<=69) {
//     console.log("C");
// }
// else if(marks>=50 && marks<=59) {
//     console.log("D");
// }
// else if(marks>=0 && marks<=49) {
//     console.log("F");
// }
// else {
//     console.log("Invalid number input!!!");
// }

// LOOPS in JavaScript--->

// for(let i=1; i<=10; i++) {
//     console.log("niku");
// }
// let sum=0;
// let result;
// for (let i=1; i<=5; i++) {
//    sum += i;
// }
// console.log("SUM =",sum);


// While Loops---->
// let i=1;
// while(i<=10) {
//     console.log("FEKU");
//     i++;
// }

// DO WHILE LOOP
// let i=1;
// do{
//     console.log("FEKU");
//     i++;
// } while(i<=10) ;

// for of loop-->
// let name= "feniKunal";
// for(let i of name) {
//     console.log(i);
// }


// for in loop----> its for objects keys 

// const Profile = {
//     username: "shradhakhapra",
//     name: "Shradha Khapra",
//     Followers: 569000,
//     posts: 195,
//     Following: 4,
//     BIO: "Apna College",
//     Bluetick: true,
//     followed: false,
//     profession: "entrepreneur"
// } 

// for(let i in Profile) {
//     console.log("key = ",i, ", Value = ", Profile[i]);
// }

// let x=100;
// for (let i=0; i<=100; i++) {
//     if(i%2 !== 0){
//     console.log(i);
//     }
// }

// let GameNumber = 44;


// let ask = Number(prompt("Enter for guess exact number:"));
// console.log(ask);

// while(GameNumber !== ask) {
//     if(ask > GameNumber){
//         console.log("Enter lesser number for exact number!");

//     } else if (ask < GameNumber){
//         console.log("Enter Greater number for get exact number!");

//     }
//     ask = Number(prompt("Try again: "));    
// }

// console.log("Hurray! You got the number!!!");

// let str = "kunaal&Feni";
// console.log(str[0]);
// let str1 = `hjgdgdugshudhsjshhk`;
// console.log(typeof str1);


// Template litterals in JS

// let obj = {
//     item: "Book",
//     price: 100
// }

// let output = `the product is a ${obj.item} and its price is ${100} rupees kunaal`
// // console.log(output.slice(45));
// // console.log(output.concat("kunaal"));
// console.log(output.replaceAll("k","F"));

// console.log(output);

// let firstname = prompt("Enter your first name: ");
// let lastname = prompt("Enter your last name: ");

// let username = "@" + firstname + lastname + firstname.length;

// console.log(`Your username: ${username}`);


// ARRAYSS ---->

// let arays = ["kunalFeni", "chetna","charvi"];

// for(let i=0; i<arays; i++){
//     console.log(arays[i]);
// }

// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;
// for(let i of marks) {
//     sum += i;
// }
// console.log(sum);
// let average = sum / marks.length;
// console.log("Average of all class marks: ", average);


// let prices = [250, 645, 300, 900, 50];
// let i=0;
// for(let el in prices) {
//     console.log("element at index ",i,"=", prices[el]);
//     let Disc = prices[el]/10;
//     prices[i] = prices[i] - Disc;
//     console.log(`element after discount = ${prices[i]}`);
//     i++;
// }




// for( let i of prices) {
//     Disc = i - i*0.1;
//     console.log(`Final price: ${Disc}`);
// }

// // console.log(`Final total: ${Disc}`);

// Functions ---->

// function myfun(msg){
//     console.log(msg);       // NaN means Not a Number
//     console.log(msg);
// }


// Modern JS ---=> 
// const arrowMul = (a, b) => {
//     console.log(a*b);
// }
// arrowMul(5, 3);


// || string[i]==="e" || string[i]==="o" || string[i]==="u" || string[i]==="a"
// function takeStr(string) {
//     for(let i=0; i<string.length; i++){
//         if(string[i]==="a") {
//                 console.log("a");
//         }
//         if(string[i]==="i") {
//                 console.log("i");
//         }
//         if(string[i]==="e") {
//                 console.log("e");
//         }
//         if(string[i]==="o") {
//                 console.log("o");
//         }
//         if(string[i]==="u") {
//                 console.log("u");
//         }
//     }
// }

// takeStr("");

// const takestr = (str) => {
//     let count = 0;
//     for(let i=0; i<str.length; i++){
//         if(str[i]==="a") {
//                 count+=1;
//         }
//         if(str[i]==="i") {
//                 count+=1;
//         }
//         if(str[i]==="e") {
//                 count+=1;
//         }
//         if(str[i]==="o") {
//                 count+=1;
//         }
//         if(str[i]==="u") {
//                 count+=1;
//         }
//         console.log(count);
//     }
// }

// takestr("");


// const takestr = (str) => {
//     let count = 0;
//     for(let i=0; i<str.length; i++){
//         if(str[i]==="a" || str[i]==="e" || str[i]==="o" || str[i]==="u" || str[i]==="i") {
//                 count+=1;
//         }
//     }
//             console.log(count);

// }

// takestr("kunaal");

// let array = [2,3,4,5];

// array.forEach(square = (nums) => {
//     console.log(nums*nums);
// })

// let h2 = document.querySelector("h2");
// console.log(h2.innerText)
//  h2.innerText = h2.innerText + " from fenii";

// let divs = document.querySelector(".box");
// divs[0].innerText = "New unique value";
// divs[1].innerText = "New unique value";
// divs[2].innerText = "New unique value";

// let btn = document.querySelector(".button");
// let follow = "No";

// btn.addeventlistener("click", () => {
//     console.log("You followed?");
//     if(follow=== "No") {
//         follow = "Yes";
//         document.querySelector("body").style.backgroundcolor="black";
//     } else {
//         follow= "No"
//         document.querySelector("body").style.backgroundcolor="white";
//     }
//     console.log(follow)
// })

// let h1 = document.querySelector("h1");
// console.dir(h1.innerHTML);
// h1.innerText = h1.innerText + " Folks";
// console.dir(h1);
// h1 = document.body.h1 + "Folks";


// let boxes = document.querySelectorAll(".box");
// let idx=1;
// for (div in boxes){
// boxes.innerText = `this is the div no. ${idx}`;
// console.dir(boxes[div]);

//     idx++;
// }

// console.log(boxes[div]);
// let div = document.querySelector("div");
// // let name = div.setAttribute("id","kf");
// // console.log(name);

// let colorful = div.style.backgroundColor ="#1e90ff";
// console.log(colorful)


// let nh = document.createElement("h1");
// nh.innerHTML = "<i>Fenii!</i>";
// document.querySelector("body").prepend(nh);


// let first = document.querySelector("#box1");
// first.remove();

// let sec = document.querySelector(".box");
// sec.remove();

// let thd = document.querySelector(".box");
// thd.remove();


// document.querySelector("body");

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me!";
// document.querySelector("h1").after(newBtn);


// document.querySelector("body");
// let body = newBtn.style.backgroundColor ="red";
// let color = newBtn.style.color ="white";

// let para = document.querySelector("p");

// CLASSES & OBJETS

// Prototype in JS

// const employee = {
//      salary: 50000,
//     calcTax() {
//         console.log("Tax rate is 10%", this.salary);
//     }
// }

// const karanArjun = {
//     salary: 50000
// }

// const karanArjun2 = {
//     salary: 50000
// }

// const karanArjun3 = {
//     salary: 50000
// }

// karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;


// CLASS --->

// class Toyota {

//     constructor(brand, mileage) {
//         console.log("new object is created.");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("Start");
//     }
//     stop() {
//         console.log("Stop");
//     }
//     setBrand(brand){
//         this.brandname = brand;
//     }
// }
// let fortuner = new Toyota();
// fortuner.setBrand("fortuner");
// let fortuner = new Toyota("fortuner", 10);


// Syncronisation, Asyncronisation, Promise ---->

// -------------> CallBack
// function kunaal(a, b) {
//     // console.log("Kunaal Prasad.", a);
//     setTimeout(() => {
//         console.log("data", a);
//         if (b) {
//             b();
//         }
//     },
//         2000);
// }

// ---------> CallBack HELL
// kunaal(1, () => {
//     console.log("Getting Data2...");
//     kunaal(2, () => {
//         console.log("Getting Data2...");
//         kunaal(3, () => {
//             console.log("Getting Data2...");
//             kunaal(4, () => {
//                 console.log("Getting Data2...");
//             });
//         });
//     });
// });

// ------------> Promise

// let promise = () => { 
//     return new Promise((resolve, reject) => {
//     console.log("A new promise");
//     reject("error occured!");
// });
// }


// --------> .then, .catch
// let promise1 = promise();

// promise1.then((res) => {
//     console.log("This is succeeded.", res);
// })

// promise1.catch((err) => {
//     console.log("Thats a error!", err);
// })



// -----------> async & await

// function kunaal(a, b) {
//     // console.log("Kunaal Prasad.", a);
//     setTimeout(() => {
//         console.log("data", a);
//         if (b) {
//             b();
//         }
//     },
//         2000);
// }

// kunaal(2);
// let getalldata = () => {
//     return new Promise((resolve, reject) => {
//         resolve("success");
//     },
// );
// }

// async function getAlldata() {
//     console.log("Fetching data 1");
//     await kunaal(1);
//     console.log("Fetching data 2");
//     await kunaal(2);
// }




















