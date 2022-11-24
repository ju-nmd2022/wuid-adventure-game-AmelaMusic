function clickaxe() {
  var c = confirm(
    "This isnt working, there are too many zombies, I need to find a way to get out of here! "
  );
}

function switchAxe() {
  confirm(
    "This isnt working, there are too many zombies, I need to find a way to get out of here! "
  );
  document.getElementById("img1").style.display = "inline";
  document.getElementById("axeImage").style.display = "none";
}

// function clickstore() {
//   var z = confirm("I need to find a way inside the store");
//   if (z == true) {
//     document.getElementById("lock").style.display = "inline";
//     sessionStorage.setItem("lock", "key");
//   } else {
//   }
// }

function clickstore() {
  var z = confirm("Click on the lock to unlock the store!");
  if (z == true) {
    document.getElementById("lock").style.display = "inline";
    sessionStorage.setItem("lock", "key");
  } else {
    document.getElementById("lock").style.display = "inline";
  }
}

function coinFlip() {
  var no = document.getElementById("img1");
  const coinFlipNumber = Math.floor(Math.random() * 2);
  if (no.onclick && coinFlipNumber === 0) {
    window.location.href = "Winpage.html";
    // confirm("Congrats you have escaped!!");
    sessionStorage.setItem("Win", "done");
  } else if (no.onclick && coinFlipNumber === 1) {
    confirm("Try again");
    coinFlip();
  }
}

function codeLock() {
  confirm("You need to get the right number to unlock it");
  var c = prompt("Enter the code:");
  if (c == 1010) {
    confirm("Congrats you have unlocked it!");
    sessionStorage.setItem("hidenote", "key2");
    document.getElementById("inside").style.display = "inline";
    document.getElementById("lock").style.display = "none";
    document.getElementById("img3").style.display = "none";
  } else if (c != 1010) {
    var n = confirm(
      "Wrong! I need to find the code, I should look in the woods"
    );
    if (n == true) {
      codeLock();
    }
  }
}

// https://stackoverflow.com/questions/27731812/simple-if-else-onclick-then-do

var yes = document.getElementById("insidestore");

function ClickKeys() {
  confirm(
    "Great, we found the keys! Lets go back to the car and press on the image"
  );

  // document.getElementById("woodshint").style.display = "inline";

  sessionStorage.setItem("keys", "escape");
  confirm(
    "P.S. The car is in a bad shape, You may need multiple tries to start the car by pressing OK"
  );
  document.getElementById("keys").style.display = "inline";
  document.getElementById("keysImage").style.display = "none";
  yes.onclick = function () {
    coinFlip();
  };
}

//https://thisinterestsme.com/hide-image-javascript/
function switchNote() {
  var z = confirm("The keys to the car are in a nearby store! P.S. Code:1010 ");
  if (z == true) {
    document.getElementById("img3").style.display = "inline";
    document.getElementById("img2").style.display = "none";
  } else {
  }
}

// https://stackoverflow.com/questions/35593686/how-to-display-an-image-only-if-a-js-variable-is-true

var clicks = 0;
// declare function to handle clicks
function handleClicks() {
  //whenever this function runs, it will increase the clicks count by 1
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
  // if number of clicks is greater than one then show image 2
  if (clicks == 2) {
    confirm("The car is locked but there is a note inside the car! Pick it up");
    document.getElementById("img2").style.display = "inline";
    sessionStorage.setItem("note", "woods");
  } else if ("keys" in sessionStorage) {
    coinFlip();
  } else if (clicks == 1) {
    // if clicks aren't greater than 1 do something else
    confirm(
      "I can use this car to escape! Lets try and unlock it by pressing on the car again! "
    );
  } else {
    return;
  }
}

var imgClicks = 0;

function myFunction() {
  imgClicks += 1;
  document.getElementById("click").innerHTML = imgClicks;
  if (imgClicks > 1) {
    return;
  } else if (imgClicks == 1) {
    // if clicks aren't greater than 1 do something else
    var r = confirm(
      "There is an axe on the image maybe I can use it to protect myself!"
    );
    confirm("Press the axe!");
  }
  if (r == true) {
  } else {
    return;
  }
}

if ("note" in sessionStorage) {
  document.getElementById("img3").style.display = "inline";
}

// if ("inside2" in sessionStorage) {
//   document.getElementById("inside").style.display = "inline";
// }

if ("hidenote" in sessionStorage) {
  document.getElementById("img3").style.display = "none";
}

if ("keys" in sessionStorage) {
  document.getElementById("keys").style.display = "inline";
}
