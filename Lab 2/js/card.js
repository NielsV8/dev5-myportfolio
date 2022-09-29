import Bingo from "./bingo.js";

export default class Card {
  constructor(title) {
    // the constructor is called when you create a new instance of the class
    this.title = title;
  }

  markDone(target) {
    // to mark a card as done, we add a class .bingo__card--done to it
    // 🔥🔥🔥 TODO 5: mark or unmark (toggle) a bingo card when clicked
    console.log(target);
    let cardDone = document.createElement("div");
    cardDone.addEventListener("mouseover", (e) => {
      console.log("Marking card as done");
    })
    
    // hint: use class .bingo__card--done
  }

  render(counter) {
    let card = document.createElement("div");
    card.classList.add("bingo__card");
    card.dataset.number = counter + 1;
    card.innerHTML = this.title;
    document.querySelector(".bingo__board").appendChild(card)

    // 🔥🔥🔥 TODO4: when we click an item, we want to check for winners and we want to save the selection to storage
    card.addEventListener("click", (e) => {
      // this.markDone(e.target);
      // call checkWinner() on the Bingo class
      // try to call the save() method on the Bingo class
    });
  }
}
