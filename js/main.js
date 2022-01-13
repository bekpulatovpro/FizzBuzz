var elForm = document.querySelector(".truthy__form");
var elInput = elForm.querySelector(".truthy__input");
var elResult = elForm.querySelector(".result");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var chekInput = elInput.value.trim();

  if (
    chekInput == 0 ||
    chekInput == "Null" ||
    chekInput == "undefined" ||
    chekInput == "Nan" ||
    chekInput == "nan" ||
    chekInput == "Undefined" ||
    chekInput == "null"
  ) {
    elResult.textContent = "Your data type Falthy";
  } else if (chekInput % 3 == 0 && chekInput % 5 == 0) {
    elResult.textContent = "FizzBuzz";
  } else if (chekInput % 3 == 0) {
    elResult.textContent = "Fizz";
  } else if (chekInput % 5 == 0) {
    elResult.textContent = "Buzz";
  } else {
    elResult.textContent = "Your data type Truthy";
  }
});
