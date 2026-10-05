document.getElementById("take").addEventListener("click", function () {
  const bill = Number(document.getElementById("bill").value);
  const paidText = document.getElementById("paid").value;
  const paid = paidText === "" ? null : Number(paidText);

  const change = work(paid, bill);

  document.getElementById("change").textContent = "";
  document.getElementById("owed").textContent = "";
  document.getElementById("half").textContent = "";
  document.getElementById("stored").textContent = "";
  document.getElementById("paidKind").textContent = "";

  if (bill > paid) {
    document.getElementById("owed").textContent = "Still owed: " + (bill - paid);
  } else {
    document.getElementById("change").textContent = "Change: " + change;
  }
  if (paid > bill) {
    document.getElementById("half").textContent = "Half of the change: " + change / 2;
  }
  if (paid === null) {
    document.getElementById("stored").textContent = "Paid: " + paid;
    document.getElementById("paidKind").textContent = "Kind of paid: " + typeof paid;
  }
});

function work(paid, bill) {
  return paid - bill;
}
