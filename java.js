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



