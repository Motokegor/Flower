const accordionItem = document.querySelectorAll(".accordion__item");
// const questionSpan = document.querySelector(".question-span2");
const spanMinus = document.querySelector('.span-minus1')
const spanMinus2 = document.querySelector('.span-minus2')
const spanMinus3 = document.querySelector('.span-minus3')
const spanMinus4 = document.querySelector('.span-minus4')
const spanMinus5 = document.querySelector('.span-minus5')
const spanMinus6 = document.querySelector('.span-minus6')
const spanMinus7 = document.querySelector('.span-minus7')


accordionItem.forEach((accordionItem) => {
  accordionItem.addEventListener("click", () => {
    accordionItem.classList.toggle("accordion__item-active");
    // questionSpan.classList.toggle("question-span-active");
    spanMinus.classList.toggle('spanMinus1')
    spanMinus2.classList.toggle('spanMinus2')
    spanMinus3.classList.toggle('spanMinus3')
    spanMinus4.classList.toggle('spanMinus4')
    spanMinus5.classList.toggle('spanMinus5')
    spanMinus6.classList.toggle('spanMinus6')
    spanMinus7.classList.toggle('spanMinus7')
  });
});
