document.getElementById("take").addEventListener("click", function () {
  const bill = Number(document.getElementById("bill").value);
  const paid = Number(document.getElementById("paid").value);

  const change = work(paid, bill);

  document.getElementById("change").textContent = "";
  document.getElementById("owed").textContent = "";
  document.getElementById("half").textContent = "";

  if (bill > paid) {
    document.getElementById("owed").textContent = "Still owed: " + (bill - paid);
  } else {
    document.getElementById("change").textContent = "Change: " + change;
  }
  if (paid > bill) {
    document.getElementById("half").textContent = "Half of the change: " + change / 2;
  }
});

function work(paid, bill) {
  return paid - bill;
}
