import { arrImg } from "./scriptPicture";
const input = document.querySelector(".input_search");
const btn = document.querySelector(".btn_search");
const btn1 = document.querySelector(".loupe");
const container = document.querySelector(".product");
fetch("http://localhost:3001/product")
  .then((resp) => resp.json())
  .then((flower) => {
    const newFlower = flower.map((item, index) => {
      item.src = arrImg[index];
      return item;
    });

    listPosts(newFlower);
  });

function createPost({ title, id, src, price, priceStrikethrough }) {
  const div = document.createElement("div");
  div.classList.add("product__item");
  div.id = id;
  const template = `
  <div class="product__item-left">
    <img src="${src}" alt="#" />
  </div>
  <div class="product__item-right">
    <div class="product__item-right-head">
      <h2>${title}</h2>
    </div>
    <div class="product__item-right-body">
      <div class="product__item-right-body-price">
        <p>${price}</p>
        <span class="product__item-right-body-price_strikethrough">
        ${priceStrikethrough ? priceStrikethrough : " "}
        </span>
      </div>
      <div class="product__item-right-body-text">
        <span>Состав</span>: Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза
      </div>
      <div class="product__item-right-body-text">
        Завораживающая глубина ваших чувств передана огненными
        красками этого букета
      </div>
      <div class="product__item-right-body-subtext">
      <span>Категории</span>: 8 марта, Букет на 14 февраля, Букет на праздник, Букеты цветов на День рождения, Композиции из цветов, Композиции из цветов в коробке
      Метки: Для начальника, Мужские букеты
      </div>
    </div>
    <div class="product__item-right-glavbasket">
      <div class="product__item-right-basket">
        <a href="#">В корзину</a>
      </div>
      <div class="product__item-right-basket_quantity">
        <div class="product__item-right-basket_quantity-minus">
        </div>
        <div class="product__item-right-basket_quantity-number">
          1
        </div>
        <div class="product__item-right-basket_quantity-plus">
          <span></span>
        </div>
      </div>
    </div>
  </div>
  `;
  div.innerHTML = template;
  container.append(div);
}

function listPosts(arr) {
  container.innerHTML = "";
  arr.forEach((item) => {
    createPost(item);
  });
}

function serch() {
  fetch("http://localhost:3001/product")
    .then((resp) => resp.json())

    .then((flower) => {
      const newFlower = flower.map((item, index) => {
        item.src = arrImg[index];
        return item;
      });

      const value = input.value;
      if (value) {
        const modal = document.querySelector(".submodal");
        const body = document.querySelector(".body");
        const newArr = newFlower.filter((item) => {
          if (item.title.indexOf(value) == -1) {
            return false;
          } else {
            return true;
          }
        });
        if (newArr.length > 0) {
          listPosts(newArr);
          container.classList.add("product-active");
        } else {
          modal.classList.add("modal-active");
          body.classList.add("body-active");
        }
      }
    });
}

btn.addEventListener("click", serch);
btn1.addEventListener("click", serch);

