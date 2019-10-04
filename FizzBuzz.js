function FizzBuzz(){
  for (var x = 0; x <= 100; x++) console.log(CheckNumber(x));
}

function CheckNumber(number){
  if (number % 3 == 0) return "Fizz";
  if (number % 5 == 0) return "Buzz";
  return number;
}

FizzBuzz();
