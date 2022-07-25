/****************  DATA TYPES      ***************/
var developer = "Seda Ünal"; //string data type
//developer = developer.substring(1, 6);
var value = 10; //number data type
value = "Aykut Ünal";
var isItTrue = true; //boolean data type
document.getElementById("demo").innerHTML = developer;
//console.log(value);

/****************  ARRAYS    ***************/
var developers = ["Seda Ünal", "Hakan Korkmaz"];
document.getElementById("demo").innerHTML = developers;
developers[1] = "Aykut Ünal";
developers.push("İpek Yılmaz");
developers[developers.length] = "Hakan Korkmaz";
//console.log(developers)
document.getElementById("demo").innerHTML = developers[3];

/****************  OBJECTS    ***************/

var developer = { firstName: "Seda", lastName: "Ünal", city: "Ankara" }; // {} that's an object
document.getElementById("demo").innerHTML = developer.firstName;

// loosly typing
var number = 10;
number = new Object();
console.log(number);

// dynamic typing
var customer = {
  id: 1,
  name: " Seda Ünal",
};

customer.country = "Turkey";

customer.sayHello = function () {
  alert("Hello" + this.name);
};

//customer.sayHello();

/****************  EVENTS    ***************/
function myFunction() {
  alert("I am an alert box!");
}

/****************  FUNCTIONS    ***************/
//function signature function
function functionName(parametre1, parametre2) {
  //do something
  return parametre1 * parametre2;
}

//console.log(functionName(2,3))

//function withouth return function
function functionWithouthReturn(parametre1, parametre2) {}
//console.log("function withouth return function",functionWithouthReturn(2,3))

//parameter defaults
function functionName2(x, y) {
  if (y === undefined) {
    y = 0;
  }
}
//kullanıcı x değerini girip y değerini girmezse default değerini y === undefined ' sa 0 gelsin diye tan
console.log(functionName2(3));

//The Arguments Objects
x = findMax(1, 13, 468, 85);

function findMax() {
  var i,
    max = 0;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
    return max;
  }
}

//conditionals
var date  = new Date();
console.log(date);
