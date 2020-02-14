//Modal start

let modal = document.getElementById("modal");
let shadow = document.getElementsByClassName("shadow")[0];

let btnOpen = document.getElementById("btn");

let shadowClose = document.getElementsByClassName("closed")[0];
let btnClose = document.getElementsByClassName("closed")[1];

btn.onclick = function() {
  modal.style.display = "block";
  shadow.style.display = "block";
};

btnClose.onclick = function() {
  modal.style.display = "none";
  shadow.style.display = "none";
};

shadowClose.onclick = function() {
  modal.style.display = "none";
  shadow.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    shadow.style.display = "none";
  }
};

//Modal end

//Check change bg color start
function myCheck1() {
  let checkBox = document.getElementById("check1");
  let bg = document.getElementById("form-first");

  if (checkBox.checked == true) {
    bg.style.background = "#00ff00";
    console.log("checked 1: true");
  } else {
    bg.style.background = "none";
    console.log("checked 1: false");
  }
}

function myCheck2() {
  let checkBox = document.getElementById("check2");
  let bg = document.getElementById("form-second");

  if (checkBox.checked == true) {
    bg.style.background = "#00ff00";
    console.log("checked 2: true");
  } else {
    bg.style.background = "none";
    console.log("checked 2: false");
  }
}

function myCheck3() {
  let checkBox = document.getElementById("check3");
  let bg = document.getElementById("form-third");

  if (checkBox.checked == true) {
    bg.style.background = "#00ff00";
    console.log("checked 3: true");
  } else {
    bg.style.background = "none";
    console.log("checked 3: false");
  }
}

//Check change bg color end

//Simple Calc start
function showresult(operations) {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let n3 = parseFloat(document.getElementById("num3").value);
  let n4 = parseFloat(document.getElementById("num4").value);
  let n5 = parseFloat(document.getElementById("num5").value);
  let n6 = parseFloat(document.getElementById("num6").value);
  let operator1 = parseFloat(document.getElementById("operator1").value);
  let operator2 = parseFloat(document.getElementById("operator2").value);
  let operator3 = parseFloat(document.getElementById("operator3").value);
  let r1, r2, r3;

  switch (operations) {
    case "1":
      if ((operator1 = "+")) {
        r1 = n1 + n2;
      } else if ((operator1 = "-")) {
        r1 = n1 - n2;
      } else if ((operator1 = "*")) {
        r1 = n1 * n2;
      } else if ((operator1 = "/")) {
        r1 = n1 / n2;
      } else {
        r1 = "error";
      }

      document.getElementById("result1").value = r1;
      console.log("result 1: " + r1);
      break;
    case "2":
      if (operator2 == "+") {
        r2 = n3 + n4;
      } else if (operator2 == "-") {
        r2 = n3 - n4;
      } else if ((operator2 = "*")) {
        r2 = n3 * n4;
      } else if ((operator2 = "/")) {
        r2 = n3 / n4;
      } else {
        r2 = "error";
      }
      document.getElementById("result2").value = r2;
      console.log("result 2: " + r2);
      break;
    case "3":
      if ((operator3 = "+")) {
        r3 = n5 + n6;
      } else if ((operator3 = "-")) {
        r3 = n5 - n6;
      } else if ((operator3 = "*")) {
        r3 = n5 * n6;
      } else if ((operator3 = "/")) {
        r3 = n5 / n6;
      } else {
        r3 = "error";
      }
      document.getElementById("result3").value = r3;
      console.log("result 3: " + r3);
      break;
    default:
      break;
  }
}

//Simple Calc end
