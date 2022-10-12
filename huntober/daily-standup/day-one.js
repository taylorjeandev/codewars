// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

// always a positive number

function fizzBuzz(num) {
    let arr = [] 
    for(let i = 1; i < num + 1; i++){
      if(i % 15 == 0){
        arr.push('fizzbuzz')
      }else if(i % 5 == 0){
        arr.push('fizz')
      }else if(i % 3 == 0){
        arr.push('buzz')
      }else{
        arr.push(i)
      }
    }
    return arr
    
  }
  
  console.log(fizzBuzz(10))
  console.log(fizzBuzz(20))
  console.log(fizzBuzz(5))
  
  