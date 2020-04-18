//------------------------Name: Md Abid Ahmed-------------------------------//
//------------------------Email:abidahmed78692@gmail.com)-------------------//
function generate() {
  console.log("Button was clicked!!");
  /////////////************AFTER CLICKED BUTTON*********** */////////////////////
  //generate a random 6 digit number and display it in the <div> //element.
  ///////////////************FIRST DIV ELEMENT IS GENERATED***********///////////
  var newElem = document.createElement("div");
  newElem.className = "newClass";
  var randomNumber = (document.getElementById(
    "GeneratedNumber"
  ).innerHTML = Math.floor((Math.random() * 9 + 1) * 100000));
  newElem.innerHTML = randomNumber;
  document.getElementById("GeneratedNumber").style.fontSize = "70px";
  document.getElementById("GeneratedNumber").style.margin = "30px";
  console.log(newElem);
  ////////////////////////*******SECOND DIV ELEMENT******////////////////////////////
  var newPageRefresh = document.createElement("div");
  newPageRefresh.className = "newPageRefreshClass";
  document.getElementById("PageRefresh").style.fontSize = "30px";
  document.getElementById("PageRefresh").style.margin = "30px";
  var paraDisplay = document.getElementById("PageRefresh");
  paraDisplay.innerText = "Refreshing the page in 10 seconds..........";
  ////////////////***********GENERATED NUMBER SPLITTED HERE*************/////////
  ///////////////////////////LOCAL STORAGE //////////////////////////////////////

  if (typeof Storage !== "undefined") {
    // Store
    localStorage.setItem("randomNum", randomNumber);
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem(
      "randomNum"
    );
  } else {
    document.getElementById("result").innerHTML =
      "Sorry, your browser does not support Web Storage...";
  }
  setTimeout("pRefresh()", 5000);
}

/////////////////////////****REFRESH AFTER 10 SECOND*************///////////////
function pRefresh() {
  var elem = document.getElementById("containerId");
  elem.className = "container";
  // var rmv = document.getElementsByTagName;
  // console.log(rmv);
  elem.remove();
  console.log("10 second.");
  var remAll = document.getElementById("removeAllElem");
  remAll.remove();

  /*****************CREATING NEW ELEMENT AFTER REMOVING THE ELEMENT**********************/

  var par = document.getElementById("newParaElem");
  par.innerHTML = "Guess the number";
  document.getElementById("newParaElem").style.fontSize = "63px";
  document.getElementById("newParaElem").style.margin = "10px";
  document.getElementById("newParaElem").style.padding = "50px";
  document.getElementById("newParaElem").style.backgroundColor = "lightgreen";
  var inp = document.createElement("input");
  inp.setAttribute("placeholder", "Enter Number");
  inp.setAttribute("maxlength", "6");
  inp.className = "form-control col-md-6";
  inp.setAttribute("id", "inputText");
  inp.type = "text";
  par.appendChild(inp);
  ////////////////////////*******guess-Button******//////////////////////////////
  var Btn = document.createElement("button");
  Btn.type = "button";
  Btn.className = "btn btn-primary ml-2 mt-5";
  Btn.innerHTML = "guess";
  Btn.setAttribute("onclick", "varify();");
  par.appendChild(Btn);
  /////////////////////restart////////////////////
  var reBtn = document.createElement("button");
  reBtn.type = "button";
  reBtn.className = "btn btn-danger ml-2 mt-5";
  reBtn.innerHTML = "Replay Game";
  reBtn.setAttribute("onclick", "restart();");
  par.appendChild(reBtn);
}
function varify() {
  // console.log("button was clicked");
  var inputVal = document.getElementById("inputText").value;
  console.log("InputTextField:" + inputVal);
  var genValue = document.getElementById("result").innerHTML;
  console.log("generatedNumber is:" + genValue);
  if (inputVal == "") {
    alert("input field is empty");
  } else {
    var inpt = inputVal.toString();
    var res1 = inpt.split("");
    console.log(res1);
    var gval = genValue.toString();
    var res2 = gval.split("");
    console.log(res2);
    var count = 0;
    for (let i = 0; i < 6; i++) {
      for (let j = i; j <= i; j++) {
        if (res1[i] == res2[j]) {
          count = count + 1;
        }
      }
    }
    console.log(count + "correct guesses");

    var a = document.getElementById("correctGuess");
    a.innerHTML = count + "--correct guesses";
    document.getElementById("correctGuess").style.fontSize = "25px";
    document.getElementById("correctGuess").style.margin = "10px";
    document.getElementById("correctGuess").style.padding = "30px";
    document.getElementById("correctGuess").style.backgroundColor = "lightblue";
  }
}

function restart() {
  console.log("button is clicked");
  location.reload();
}
