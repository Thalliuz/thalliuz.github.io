$(document).ready(function() {
  
  var fullAmount = []
  
  var num = []

  var func = null

  function evaluate(array){
    if (array[1] === "+") {
      var complete = array[0] + array[2]
      array = [complete]
      console.log(complete)
    } else if (array[1] === "-") {
      var complete = array[0] - array[2]
      array = [complete]
      console.log(complete)
    } else if (array[1] === "X") {
      var complete = array[0] * array[2]
      array = [complete]
      console.log(complete)
    } else if (array[1] === "÷") {
      var complete = array[0] / array[2]
      array = [complete]
      console.log(complete)
    } else {
      console.log("error")
    }
    $("#res").val(complete);
  }

  $('.num').click(function() {
      num.push($(this).text())
      console.log(num)
      console.log(fullAmount)
      $("#res").val(num.join(''));
  });

  $('.action').click(function() {
    func = $(this).text();
    num = num.join("")
    fullAmount.push(parseInt(num))
    if (fullAmount.length === 3) {
      evaluate(fullAmount)
    }else {
      fullAmount.push(func[0])
      console.log(func)
    }

    $("#res").val(fullAmount);
    func = null
    num = []
  });



  $('#equals').click(function() {
    if (fullAmount[1] === "+") {
      fullAmount.push(parseInt(num))
      var complete = fullAmount[0] + fullAmount[2]
      fullAmount = [complete]
      console.log(complete)
    } else if (fullAmount[1] === "-") {
      fullAmount.push(parseInt(num))
      var complete = fullAmount[0] - fullAmount[2]
      fullAmount = [complete]
      console.log(complete)
    } else if (fullAmount[1] === "X") {
      fullAmount.push(parseInt(num))
      var complete = fullAmount[0] * fullAmount[2]
      fullAmount = [complete]
      console.log(complete)
    } else if (fullAmount[1] === "÷") {
      fullAmount.push(parseInt(num))
      var complete = fullAmount[0] / fullAmount[2]
      fullAmount = [complete]
      console.log(complete)
    } else {
      console.log("error")
    }
    $("#res").val(complete);
  });

  $('#clear').click(function() {
    num = []
    fullAmount = []
    func = null
    $("#res").val("")
    console.log(num)
    console.log(fullAmount)
    console.log(func)

  });
  });
