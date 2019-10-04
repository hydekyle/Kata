function FizzBuzz() {
  for (var x = 0; x <= 100; x++) {
    console.log(CheckNumber(x));
  }
}

function CheckNumber(number) {
  if (number % 3 == 0 && ContainThisNumber(number, 3)) {
    return "Fizz";
  }
  if (number % 5 == 0 && ContainThisNumber(number, 5)) {
    return "Buzz";
  }
  return number;
}

function ContainThisNumber(number, n) {
  let numberString = number.toString();
  for (var x = 0; x < numberString.length; x++){
    if (numberString[x] == n) {
      return true;
    }
  }
  return false;
}

FizzBuzz();
