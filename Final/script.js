import { product } from "./product";

const productitem = document.getElementById("item");
const productqty = document.getElementById("qty");
const productsubmit = document.getElementById("btn-submit");
const list = document.getElementById("buying-list");
const pendingitem = document.getElementById("countPendingItems");
const clear = document.getElementById("btn-clear");

productsubmit.addEventListener("click", () => {
  let countproduct = 0;
  let countqty = 0;
  let countshow = 1;
  let value_item = productitem.value;
  let value_qty = productqty.value;

  product.item.push(value_item);
  product.qty.push(value_qty);
  product.pending++;

  for (let x of product) {
    const shownum = document.createElement("li");
    shownum.innerHTML = `${countshow}`;
    countshow++;

    const showitem = document.createElement("li");
    showitem.innerHTML = `${x.product.item[countproduct]}`;
    countproduct++;

    const showpending = document.createElement("p");
    showpending.innerHTML = `${x.product.pending}`;

    pendingitem.append(showpending);
    list.append(shownum);
    list.append(showitem);
  }
  for (let x of product.qty) {
    const showqty = document.createElement("li");
    showqty.innerHTML = `${x.product.qty[countqty]}`;
    countqty++;

    list.append(showqty);
  }
}),

clear.addEventListener("click", () => {
    alert("Empty List");
  })
