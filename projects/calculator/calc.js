$(document).ready(function() {
  var num1 = []

  var num2 = []

  var func = null

  $('.num').click(function() {
    if (func === null) {
      num1.push($(this).text())
      console.log(num1)
      $("#res").val(num1.join(''));

    } else {
      num2.push($(this).text())
      console.log(num2)
      $("#res").val(num2.join(''));
    }
  });

  $('.action').click(function() {
    func = $(this).text();
    console.log(func)
    $("#res").val(func);
  });



  $('#equals').click(function() {
    if (func === "+") {
      num1 = num1.join("")
      number1 = parseInt(num1)
      num2 = num2.join("")
      number2 = parseInt(num2)
      var complete = number1 + number2
      console.log(complete)
    } else if (func === "-") {
      num1 = num1.join("")
      number1 = parseInt(num1)
      num2 = num2.join("")
      number2 = parseInt(num2)
      var complete = number1 - number2
      console.log(complete)
    } else if (func === "*") {
      num1 = num1.join("")
      number1 = parseInt(num1)
      num2 = num2.join("")
      number2 = parseInt(num2)
      var complete = number1 * number2
      console.log(complete)
    } else if (func === "/") {
      num1 = num1.join("")
      number1 = parseInt(num1)
      num2 = num2.join("")
      number2 = parseInt(num2)
      var complete = number1 / number2
      console.log(complete)
    } else {
      console.log("error")
    }
    $("#res").val(complete);
  });

  $('#clear').click(function() {
    num1 = []
    num2 = []
    func = null
    $("#res").val("")
    console.log(num1)
    console.log(num2)
    console.log(func)

  });
  });
