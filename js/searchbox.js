function myFunction() {
  var input, filter, cards, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  cards = document.querySelectorAll(".card");

  for (i = 0; i < cards.length; i++) {
    a = cards[i].querySelector(".card-header");
    txtValue = a.textContent;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      cards[i].style =
        "display: inline-block;margin: 2vh;width: 20vw;height: 25vw;background-color: rgb(51, 0, 83);transition: all 0.5s ease-out;display: flex;flex-direction: column;align-items: center;text-align: center;justify-content: space-around;font-family: 'Roboto', sans-serif;";
    } else {
      cards[i].style.display = "none";
    }
  }
}
