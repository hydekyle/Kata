console.log(add("2, 4, 6, 1"));

function add(numbers){
  let myNumbers = numbers.split(",");
  if (myNumbers.length <= 0) {
    return 0;
  }
  else {
    let suma = 0;
    for (var i = 0; i < myNumbers.length; i++){
      suma += parseInt(myNumbers[i]);
    }
    return suma;
  }
  console.warn("Formato no soportado");
}
