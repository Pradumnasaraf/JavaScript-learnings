///A function is a block of code designed to perform a particular task.*/

function sayHello(){
    console.log("Hello")
}

function name(parameter1, parameter2, parameter3) { // inside the parentheses (), those are parameter
    // code to be executed
   let allPara = parameter1+parameter2+parameter3 //allPara is a local variable
}

name() // function invoke

// Return Function
function sqaureRoot (parameter){
    return parameter*parameter // return some value
}

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

sqaureRoot(22) // function invoke with a argument
toCelsius(100)

let root = "The sqyare root =" + sqaureRoot(3) // aslo be used a variable



