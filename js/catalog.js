const flowerGroup = document.querySelector(".flower_group");
import { arrImg } from "./scriptPicture";

function createUser({ id, text, price, btn, img, priceStrikethrough }) {
  const div = document.createElement("div");
  div.classList.add("boxing");
  div.id = id;
  const template = `
  <div class="boxing_img">
  <img src="${img}" alt="">
</div>
<div class="boxing_text">
<p class="boxing_text_name">${text}</p>
<div class="box_price">
  <p class="boxing_text_price">${price}</p>
  <p class="boxing_text_price_strikethrough">${priceStrikethrough ? priceStrikethrough : ' ' }</p>
</div>
</div>
<button class="button_cart">${btn}</button>

  `;
  div.innerHTML = template;
  flowerGroup.append(div);
}

function createlistUser(arr) {
  flowerGroup.innerHTML = "";
  arr.forEach((item) => {
    createUser(item);
  });
}

async function getUsers() {
  const responce = await fetch("http://localhost:3001/flower_group");
  const data = await responce.json();
  const newData = data.map((item, index) => {
    item.img = arrImg[index];
    return item;
  });
  createlistUser(newData);
}
getUsers();
