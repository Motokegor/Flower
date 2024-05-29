const search = document.querySelector(".search-li");
const searchLi = document.querySelector(".search-li1");
const searchBtn = document.querySelector(".search-btn");
const searchBtn1 = document.querySelector(".search-btn1");
const closeInput = document.querySelector(".close-input");
const closeInput1 = document.querySelector(".close-input1");

search.addEventListener("click", openSearch);
searchLi.addEventListener("click", openSearch);
closeInput.addEventListener("click", closeSearch);
closeInput1.addEventListener("click", closeSearch);

function openSearch() {
  searchBtn.classList.add("search-btn-active");
  searchBtn1.classList.add("search-btn-active");
  search.classList.add("search-active");
  searchLi.classList.add("search-active");
}
function closeSearch() {
  searchBtn.classList.remove("search-btn-active");
  searchBtn1.classList.remove("search-btn-active");
  search.classList.remove("search-active");
  searchLi.classList.remove("search-active");
}
