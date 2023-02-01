const submitBtn = document.querySelector(".submit");
const firstBox = document.querySelector(".box");
const secondBox = document.querySelector(".resultbox");
const ratings = document.querySelectorAll(".rating");
const finalRating = document.querySelector(".final-rating");

submitBtn.addEventListener("click", () => {
	secondBox.classList.remove("hidden");
	firstBox.style.display = "none";
});

ratings.forEach((rating) => {
	rating.addEventListener("click", () => {
		finalRating.innerHTML = rating.innerHTML;
	});
});
