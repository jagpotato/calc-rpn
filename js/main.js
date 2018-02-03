const formula = "15+23+*";

calcRpn(formula);

function calcRpn(formula) {
  let splitFormula = formula.split("");
  let stack = [];
  for ( let i = 0; i < splitFormula.length; i++ ) {
    if ( /[\+\-\*/]/.test(splitFormula[splitFormula.length - 1]) === false ) {
      break;
    }
    if ( /[0-9]/.test(splitFormula[i]) === true ) {
      stack.push(splitFormula[i]);
    } else {
      let a, b;
      switch ( splitFormula[i] ) {
        case "+": 
          a = parseInt(stack.pop(), 10);
          b = parseInt(stack.pop(), 10);
          stack.push(b + a);
          break;
        case "-":
          a = parseInt(stack.pop(), 10);
          b = parseInt(stack.pop(), 10);
          stack.push(b - a); 
          break;
        case "*": 
          a = parseInt(stack.pop(), 10);
          b = parseInt(stack.pop(), 10);
          stack.push(b * a);  
          break;
        case "/": 
          a = parseInt(stack.pop(), 10);
          b = parseInt(stack.pop(), 10);
          stack.push(b / a);
          break;
        default: break;
      }
    }
  }
  console.log(stack);
}