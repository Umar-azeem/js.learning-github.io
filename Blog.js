let fruits =["apple","banana","orange"];
let numbers =[1,2,3,4.5]// Now outputs ["mango", "banana", "orange"]
let mixedArray =[true,"hello", {name :"umar"}]// Can hold objects
let emotyArray = new Array(); // Creates an empty array
let speificlengthArray = new Array (5);// Creates an array with a specific length (filled with undefined initially)
console.log(fruit[1])// Outputs "banana"
fruits[0] = "mango";
console.log(fruits); // Now outputs ["mango", "banana", "orange"]
console.log(fruits.length); // Output 3
function greet(name){// Function name and parameter
    console.log("hello",name,"!")
}
greet("Umar");// Calling the function with an argument
const sayHi = function(name){
    console.log("hi", + name);
};
sayHi("umar");
let person = {
    name : "umar",
    age : 25,
    hobbies :["reading","learing"]
};
let emotyObject = new Object();//Creates an empty object
console.log(person.name);// Outputs "umar"
console.log(person["age"]);// Also outputs "umar" (useful for dynamic property access)
person.hobbies.push("coding"); // Add a new hobby
function functionName(parameters){
    //code to be executed
    return value; //Optionl return stetament
}



