import { arrImg } from "./scriptPicture";
let tabs = document.querySelectorAll(".tabs__item");
let tabContents = document.querySelectorAll(".tab-content__item");
const tabsGlav = document.querySelector(".tabs__itemglav");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("tab-content__item-active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("tabs__item-active");
    });
    tabContents[index].classList.add("tab-content__item-active");
    tabs[index].classList.add("tabs__item-active");
  });
});

const btnSendFormServer = document.querySelector(".btn-edit-item");
const editName = document.querySelector(".input_name");
const email = document.querySelector(".input_email");
const comments = document.querySelector(".input_comments");

btnSendFormServer.addEventListener("click", getValueINputSendServerForm);

async function getValueINputSendServerForm(e) {
  const obj = {
    editName: editName.value,
    email: email.value,
    comments: comments.value,
  };

  const result = await fetch("http://localhost:3001/review", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
}



fetch("http://localhost:3001/review")
  .then((resp) => resp.json())
  .then((review) => {
    const newReview = review.map((item, index) => {
      item.src = arrImg[index];
      return item;
    });

    listPosts(newReview);
  });
const review = document.querySelector(".tab-content__item-review");
function createReview({ editName, id, comments }) {
  const div = document.createElement("div");
  div.classList.add("review__item");
  div.id = id;
  const template = `
  <h6 class="review__item-name">${editName}</h6>
  <p class="review__item-text">${comments}</p>
  `;
  div.innerHTML = template;
  review.append(div);
}

function listPosts(arr) {
  review.innerHTML = "";
  arr.forEach((item) => {
    createReview(item);
  });
}







window.addEventListener("DOMContentLoaded",() => {
	const starRating = new StarRating("form");
});

class StarRating {
	constructor(qs) {
		this.ratings = [
			{id: 1, name: "Terrible"},
			{id: 2, name: "Bad"},
			{id: 3, name: "OK"},
			{id: 4, name: "Good"},
			{id: 5, name: "Excellent"}
		];
		this.rating = null;
		this.el = document.querySelector(qs);

		this.init();
	}
	init() {
		this.el?.addEventListener("change",this.updateRating.bind(this));

		// stop Firefox from preserving form data between refreshes
		try {
			this.el?.reset();
		} catch (err) {
			console.error("Element isn’t a form.");
		}
	}
	updateRating(e) {
		// clear animation delays
		Array.from(this.el.querySelectorAll(`[for*="rating"]`)).forEach(el => {
			el.className = "rating__label";
		});

		const ratingObject = this.ratings.find(r => r.id === +e.target.value);
		const prevRatingID = this.rating?.id || 0;

		let delay = 0;
		this.rating = ratingObject;
		this.ratings.forEach(rating => {
			const { id } = rating;

			// add the delays
			const ratingLabel = this.el.querySelector(`[for="rating-${id}"]`);

			if (id > prevRatingID + 1 && id <= this.rating.id) {
				++delay;
				ratingLabel.classList.add(`rating__label--delay${delay}`);
			}

			// hide ratings to not read, show the one to read
			const ratingTextEl = this.el.querySelector(`[data-rating="${id}"]`);

			if (this.rating.id !== id)
				ratingTextEl.setAttribute("hidden",true);
			else
				ratingTextEl.removeAttribute("hidden");
		});
	}
}