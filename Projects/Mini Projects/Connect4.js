buttons = document.querySelectorAll(".buttons");
chance = 1;
color = "";
arr = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
];
arr_check = [
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
];

buttons[0].addEventListener("click", function () {
  change(
    parseInt(buttons[0].getAttribute("id").charAt(0)),
    parseInt(buttons[0].getAttribute("id").charAt(1))
  );
});
buttons[1].addEventListener("click", function () {
  change(
    parseInt(buttons[1].getAttribute("id").charAt(0)),
    parseInt(buttons[1].getAttribute("id").charAt(1))
  );
});
buttons[2].addEventListener("click", function () {
  change(
    parseInt(buttons[2].getAttribute("id").charAt(0)),
    parseInt(buttons[2].getAttribute("id").charAt(1))
  );
});
buttons[3].addEventListener("click", function () {
  change(
    parseInt(buttons[3].getAttribute("id").charAt(0)),
    parseInt(buttons[3].getAttribute("id").charAt(1))
  );
});
buttons[4].addEventListener("click", function () {
  change(
    parseInt(buttons[4].getAttribute("id").charAt(0)),
    parseInt(buttons[4].getAttribute("id").charAt(1))
  );
});
buttons[5].addEventListener("click", function () {
  change(
    parseInt(buttons[5].getAttribute("id").charAt(0)),
    parseInt(buttons[5].getAttribute("id").charAt(1))
  );
});
buttons[6].addEventListener("click", function () {
  change(
    parseInt(buttons[6].getAttribute("id").charAt(0)),
    parseInt(buttons[6].getAttribute("id").charAt(1))
  );
});

function change(row, col) {
  if (chance % 2 == 1) color = "red";
  else color = "blue";
  chance++;
  for (var i = 0; i < 5; i++) {
    number = i * 7 + col;
    if(arr_check[i][col]){
        break;
    }
    if (i == 4) {
      buttons[number].classList.add(color);
      arr_check[i][col] = true;
      arr[i][col] = color;
      break;
    }
    if (arr_check[i + 1][col]) {
      buttons[number].classList.add(color);
      arr_check[i][col] = true;
      arr[i][col] = color;
      break;
    }
    
  }

  if (wincheck("red")) {
    var replay=document.createElement("a");
    var elem = document.createElement("p");
    elem.textContent = "Red has Won the Game!";
    elem.classList.add("result")
    replay.setAttribute("class","btn btn-outline-light replay")
    replay.setAttribute("href","Connect4.html")
    replay.setAttribute("role","button")
    replay.textContent="Play Again!"
    elem.appendChild(replay);
    document.querySelector(".heading").appendChild(elem);

  } else if (wincheck("blue")) {
    var elem = document.createElement("p");
    var replay=document.createElement("a");
    elem.textContent = "Blue has Won the Game!";
    elem.classList.add("result")
    replay.setAttribute("class","btn btn-outline-light replay")
    replay.setAttribute("href","Connect4.html")
    replay.setAttribute("role","button")
    replay.textContent="Play Again!"
    elem.appendChild(replay);
    document.querySelector(".heading").appendChild(elem);

  } else if (gamestie()) {
    var elem = document.createElement("p");
    var replay = document.createElement("a");
    elem.textContent = "It's a TIE!";
    elem.classList.add("result")
    replay.setAttribute("class","btn btn-outline-light replay")
    replay.setAttribute("href","Connect4.html")
    replay.setAttribute("role","button")
    replay.textContent="Play Again!"
    elem.appendChild(replay);
    document.querySelector(".heading").appendChild(elem);
  }
}

function gamestie() {
  check = true;
  for (var i = 0; i < 5; i++) {
    if (!check) {
      break;
    }
    for (var j = 0; j < 7; j++) {
      if (arr_check[i][j] == false) {
        check = false;
        break;
      }
    }
  }
  return check;
}

function wincheck(colorcheck) {
  check = false;
  for (var i = 0; i < 5; i++) {
    if (check) {
      break;
    }
    for (var j = 0; j < 4; j++) {
      if (
        arr[i][j] == colorcheck &&
        arr[i][j + 1] == colorcheck &&
        arr[i][j + 2] == colorcheck &&
        arr[i][j + 3] == colorcheck
      ) {
        check = true;
        break;
      }
    }
  }
  return check;
}
