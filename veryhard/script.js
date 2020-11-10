var input1 = prompt("Enter a number");
var operator = prompt("Enter an operartor (ex: + - * /)");
var input2 = prompt("Enter another number");

//Addition
if (operator == "+") {
    function add(x,y){
        return parseInt(x) + parseInt(y);
    }
    console.log(input1 + " + " + input2 + " = " + add(input1,input2));
  } 
  //Subtract
  else if (operator == "-"){
    function subtract(x,y){
        return parseInt(x) - parseInt(y);
    }
    console.log(input1 + " - " + input2 + " = " + subtract(input1,input2));
  } 
  //Multiply
  else if (operator == "*") {
    function multiply(x,y){
        return x * y;
    }
    console.log(input1 + " * " + input2 + " = " + multiply(input1,input2));  } 
  //Division
  else if (operator == "/") {
    function divide(x,y){
        return x / y;
    }
    console.log(input1 + " / " + input2 + " = " + divide(input1,input2));  } 
  else {
    console.log("Please enter a valid input")
  }