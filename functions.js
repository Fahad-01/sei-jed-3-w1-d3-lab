
function yourName(name){
    return "you rock "+name;
    };
yourName('fahad');
    
function square(number){
    return number * number
    };
square(4);
    
function cube(number){
    return Math.pow(number,3);
    }
cube(2);

function toTheFourth(number){
    return Math.pow(number,4);
    }
toTheFourth(2);

////

function calculator(num1,num2,op){
    if (typeof num1 == 'string' || typeof num2 == 'string'){
      return "Function only accept numerical values for num1 and num2"
    }
    if (op === "add" || op === "substract" || op === "multiply" || op === "divide")
    {
      if (op == "add")
        return num1+num2;
      if (op == "subtract")
        return num1-num2;
      if (op == "multiply")
        return num1*num2;
      if (op == "divide")
        return num1/num2;
    } else {
      return "Function only accept add, substract, multiply and divide operations.";
    }
  };
  
  calculator('cat',3,'add');

  ////

  function fizzBuzz(number){
    if (typeof number == 'string')
    {
      return "function accepts numbers only!";
    }
    if (number%3 == 0 && number%5 ==0)
      return "fizzbuzz"
    if (number%3 == 0)
      return "fizz";
    if (number%5 == 0)
      return "buzz";
    else 
    return number 
  };
  fizzBuzz(15);

  //////

function rainDrop(number){
    if (typeof number == 'string'){
       return "function accepts numbers only!";
     } 
     var result ="";
     if (number%3 == 0){
        result = result + "pling"
     }
     if (number%5 == 0){
        result = result + "plang"
     }
     if (number%7 == 0){
        result = result + "plong"
     }
     return result
  };
  rainDrop(28);

  //////

