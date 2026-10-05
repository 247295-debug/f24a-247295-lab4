let people = [];

function add(isIn) {
  const box = document.getElementById("name");
  if (box.value.trim() === "") return;
  people.push({ name: box.value.trim(), in: isIn });
  box.value = "";
}

document.getElementById("here").addEventListener("click", function () { add(true); });
document.getElementById("out").addEventListener("click", function () { add(false); });
