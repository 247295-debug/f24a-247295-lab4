let people = []; // starts empty until Task 11

function draw() {
  const body = document.getElementById("list");
  body.innerHTML = "";
  let count = 0;
  for (const p of people) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${p.name}</td><td>${p.in}</td>`;
    body.appendChild(tr);
    if (p.in === true) {
      count = count + 1;
    }
  }
  document.getElementById("count").textContent = "People in the shop: " + count;
}

function add(isIn) {
  const box = document.getElementById("name");
  if (box.value.trim() === "") return;
  people.push({ name: box.value.trim(), in: isIn });
  box.value = "";
  draw();
}

document.getElementById("here").addEventListener("click", function () { add(true); });
document.getElementById("out").addEventListener("click", function () { add(false); });

draw();
