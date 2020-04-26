const cards = document.querySelectorAll(".card");

// for (let i = 0; i < cards.length; i++){
//   cards[i].addEventListener('click', (event)=>{
//     cards[i].classList.add('turned');
//     });
// }

cards.forEach(function (card) {
  card.addEventListener("click", () => {
    cards.forEach((card) => {
      card.classList.remove("turned");
    });

    card.classList.toggle("turned");
  });
});
