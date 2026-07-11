function processNumbers(a, b) {
  let result = a + b; 
  if (result > 10) { 
    result = result * 2; return result;  // 1 Line but 2 statement        
  } else {  
    // 2 line but one statement
    result = (a * b) +                             
    (a - b);
  }
  return result; 
}
