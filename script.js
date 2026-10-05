let rows = [];
let last = null;

function draw() {
  const body = document.getElementById("rows");
  body.innerHTML = "";
  let total = 0;
  for (const r of rows) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${r.item}</td><td>${r.quantity}</td><td>${r.price}</td><td>${r.line}</td><td>${r.note}</td>`;
    body.appendChild(tr);
    if (!Number.isNaN(r.line)) {
      total = total + r.line;
    }
  }
  document.getElementById("total").textContent = "Total: " + total;
  document.getElementById("totalKind").textContent = "Kind of the total: " + typeof total;
  if (last) {
    document.getElementById("noteKind").textContent = "Kind of the Note: " + typeof last.row.note;
    document.getElementById("match").textContent = "Price text matches the price as a number: " + (last.priceText == last.row.price);
    document.getElementById("sameKind").textContent = "Price text and price are the same kind: " + (last.priceText === last.row.price);
    document.getElementById("lineKind").textContent = Number.isNaN(last.row.line) ? "Kind of the Line: " + typeof last.row.line : "";
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
    item: itemBox.value === "" ? undefined : itemBox.value,
    quantity: quantity,
    price: price,
    line: quantity * price,
    note: priceText + quantity
  };
  rows.push(row);
  last = { row: row, priceText: priceText };
  itemBox.value = "";
  qtyBox.value = "";
  priceBox.value = "";
  draw();
});

draw();
