let rows = [];

function draw() {
  const body = document.getElementById("rows");
  body.innerHTML = "";
  for (const r of rows) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${r.item}</td><td>${r.quantity}</td><td>${r.price}</td><td>${r.line}</td><td>${r.note}</td>`;
    body.appendChild(tr);
  }
}

document.getElementById("add").addEventListener("click", function () {
  const itemBox = document.getElementById("item");
  const qtyBox = document.getElementById("qty");
  const priceBox = document.getElementById("price");
  const priceText = priceBox.value;
  const quantity = Number(qtyBox.value);
  const price = Number(priceText);
  const row = {
    item: itemBox.value,
    quantity: quantity,
    price: price,
    line: quantity * price,
    note: priceText + quantity
  };
  rows.push(row);
  itemBox.value = "";
  qtyBox.value = "";
  priceBox.value = "";
  draw();
});

draw();
