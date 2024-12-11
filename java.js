// regular function::::::)

// function btn() {
//   var name = "ansh";
//   alert("please press okay");
//   console.log(name);
//   document.getElementById("show").innerHTML = name;
// }

//arrow function with just ID:::::

// document.getElementById("btn").onclick = ()=>
// {  //WITH OR WITHOUT {}
//   var name = "Ansh";
//   alert("please press okay");
//   console.log(name);
//   document.getElementById("show").innerHTML = name;
// }

// ------------

// var btn = ()=> //with just onclick on the html button:::)
// document.getElementById("show").innerHTML = "Ansh:)"

// const val = (a)=> a * a;
// const val = (a,b)=> a * b;
// const val = (a,b)=> a + b;




// function expression::::

// const val = function(a,b)
// {
//      return a - b;
// } 

// with arrow:::

// const val = (a,b) =>
// {
//      return a - b;
// } 



//function declaration::

// function ansh()
// {
//     document.write("ansh")
// }
// ansh();  //call





// -----------event-listener

// var nameo = document.getElementById("btn");
// nameo.addEventListener("click", call);

// function call() {
//   alert("hey i am ansh");
//   document.getElementById("show").textContent = "HELLO";
// }



// -------------------//backtick game::::



// var name = "ansh"
// var surname = "sirsatiya"

// var show =  `i am using template literal ${name} , ${surname}`

// console.log(show);




// ---------


// var take = document.getElementById("trial");
// // take.innerHTML = "<h1> + take + </h1>";     //not gonnna work  just print + take + 
// take.innerHTML = `<h1>${message}</h1>`;   //use backtick
// var message = "Hello, World!";   //not work case it work line by line just take it up the it will work


//perfect example::::


// var take = document.getElementById("trial");

// var message = "Hello, World!";
// // Use the message in the h1
// take.innerHTML = `<h1 style="font-size: 100px;">${message}</h1>`;



// ----------------------objects------------------------------



// All type of function below::::))

// const obj = {
//   name: "ansh",
//   course: "pythondev/javaS/C++",
//   age: 24,
//   btno: function () {
//     return this.name + " " + this.course + " " + this.age;
//   },
// };

// with normal function using onclick in html btn:::

//   function btn()
//   {
//     console.log(obj.name + " " + obj.course + " " + obj.age);
//     document.getElementById("show").innerHTML =  obj.btno();

//    }

// ---------------- with arrow function  using id in html::::

// document.getElementById("btn").onclick = () => {
//   console.log(obj.name + " " + obj.course + " " + obj.age);
//   document.getElementById("show").innerHTML = obj.btno();
// };

// --------------------addEventListener---------------------------

// var store = document.getElementById("btn")
// store.addEventListener("click", btn)

// function btn()
// {
//     console.log(obj.name + " " + obj.course + " " + obj.age);
//     document.getElementById("show").innerHTML =  obj.btno();
// }


// ---------------------------Switch Case- No HTML --------------------------

// let today_date = new Date(); // Corrected initialization
// console.log(today_date);

// let tday = today_date.getDay(); // Get the day of the week
// console.log(tday);

// let day;

// switch (tday) {
//     case 0:
//         day = "sunday";
//         break;
//     case 1:
//         day = "monday";
//         break;
//     case 2:
//         day = "tuesday";
//         break;
//     case 3:
//         day = "wednesday";
//         break;
//     case 4:
//         day = "thursday";
//         break;
//     case 5:
//         day = "friday";
//         break;
//     case 6:
//         day = "saturday";
//         break;
// }

// console.log(`today is: ${day}`);

// // -----practise----

// let today = new Date();  // Create a new Date object
// let dayOfWeek = today.getDay();  // Get the day of the week (0-6)

// console.log(dayOfWeek);  // Print the day of the week

// console.log(`day of a week is ${dayOfWeek} and date is ${today}` );




// --------------------------array------------------------------



// const  arrayi = ["ansh", "vansh", "kansh"];

// function name(obj){
//     return obj.join(", ");
//     // return obj[0]
//     // obj.forEach( value => console.log(value));
    
// }

// console.log(name(arrayi)); 
// // console.log(["aka", "lol", "mom"]); 
// // name(arrayi); 


// --------



// const arrays = [12, 11, 15, 47]

// function getvalue(para){
//    return para[0]
// //    return para;
// }

// console.log(getvalue(arrays)); 
// // console.log(getvalue([200,300,400])); 




// --------------------array with forEach arrow fun------------------------------


// const arrayo = [12, 11, 15, 47];

// function  myfun(obj){
//     // obj.forEach(value => console.log(value));
//     obj.forEach(value => document.write(value + '<br>'));
//     // obj.forEach(value => document.write(value));
// }

// myfun(arrayo);



// -------------------------------with join  array function--------------------------


// const arrayo = [12, 11, 15, 47];

// function getit(obj){
//     return obj.join(', ');
// }

// console.log(getit(arrayo)); 




// -----------------------------objects in js-----------------------------------

// making and calling function

//   function ansh(...num1){
//     return num1;
//   }

// //   document.write(ansh(200,400))
//   console.log(ansh(400));


// ----------------------------------
// making an object and making function and object passing the value of object on console and
// then outside calling it out by function and object means anyfunction(anyobj)


// const user = {
//     name: "ansh",
//     course: "python dev"

// }

// function  show(obj){
//     console.log(`username is ${obj.name} and course is ${obj.course}`);
// }

// show(user)


// // U can manually assign the value as well
// show({
//     name: "boby",
//     course: "java.js"
// })


// ---------METHODS IN JS

//trim:::::----------------------------------------


//The trim() method in JavaScript removes whitespace from both ends 
//of a string without modifying the original string.


// //it trims the spaces means white spaces
// let nameN = "  ansh   "

// let trimN = nameN.trim();

// console.log(trimN);


// split-------------------------

//The split() method in JavaScript divides a string into an array of substrings based on a
// specified separator.

// let  data = "this is my name Ansh";  //length will b one  1

// let  dataone = data.split(",");
// // let  dataone = data.split(",");

// console.log(dataone);

// // let text = "apple banana cherry"; //it just one element of an arrray  but...

// let text = "apple, banana, cherry"; //if we use seperator means , it will count it as a 
// //multiple elements of an string

// let fruits = text.split(",");  // fruits = ['apple', 'banana', 'cherry']
// console.log(fruits);



// slice---------------------------------

// slice::::
// /The slice() method in JavaScript returns a shallow copy of a portion of an array or 
// string, extracted from a specified start index to an end index (not including the end index).

// let  data = "Javascript ansh";

// let  dataone = data.slice(0,4);  //it start from zero
// let  dataone = data.slice(-1);   // last index value
// let  dataone = data.slice(-5);   // it will give whole not one character means ansh
// let  dataone = data.slice(-6);   //it split the element with or without spaces


// console.log(dataone);



// substring()---------------------------

//The substring() method in JavaScript returns a portion of a
// string between two specified indices or we can say index:::


// let  data = "this is my name Ansh";

// let  dataone = data.substring(0,4);  //output = this
// let  dataone = data.substring(15, 20);   //it will print Ansh
// let  dataone = data.substring(16, 20 );   //it will print Ansh

// console.log(dataone);



//substr----------------

//The substr() method in JavaScript returns a substring of a string, starting from a specified
// index and extending for a given number of characters.

// (Note: substr() is considered legacy and is generally recommended
//  to use substring() or slice() instead.)




// let  data = "this is my name Ansh";

// let  dataone = data.substr(15,16);   //it does not include any spaces....
// let  dataone = data.substr(-4,4);   //shows Ansh
// let  dataone = data.substr(11, 12);   //start to all....
// let  dataone = data.substr(19);


// console.log(dataone);



// // replace--------------------------------



//The replace() method in JavaScript is used to search for a specified substring or pattern in
// a string and replace it with a new substring.

// let  data = "this is my name Ansh";
// let  data = "javascript is a funny language javascript  "

// let  dataone = data.replaceAll("javascript", "java");
// let  dataone = data.replace("javascript" , "c++");

// console.log(dataone);






