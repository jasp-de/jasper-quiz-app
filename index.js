const questionCards = document.querySelectorAll(".question-card");
questionCards.forEach((card) => {
  const button = card.querySelector(".card__button");
  const answer = card.querySelector(".card__answer");
  const bookmark = card.querySelector("[data-js='bookmark']");

  // Toggle answer visibility
  button.addEventListener("click", () => {
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });

  // Add bookmark functionality
  bookmark.addEventListener("click", () => {});
});
