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


// -------------------------------------





