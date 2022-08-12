// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

function calculator(a,b,sign){
    switch(sign){
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return 'unknown value';
    }
}

// Test.assertEquals(calculator(1,2,"+"), 3, "calculate");
// Test.assertEquals(calculator(1,2,"-"), -1, "calculate");
// Test.assertEquals(calculator(3,5,"*"), 15, "calculate");
// Test.assertEquals(calculator(6,2,"/"), 3, "calculate");
// Test.assertEquals(calculator(6,2,"$"), "unknown value", "calculate"); 
// Test.assertEquals(calculator(6,"h","*"), "unknown value", "calculate");   