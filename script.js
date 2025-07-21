function addNumbers() {
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var result = document.getElementById("result");

  if (a === "" || b === "") {
    result.innerText = "Enter both numbers.";
  } else {
    var sum = Number(a) + Number(b);
    result.innerText = "Sum: " + sum;
  }
}
