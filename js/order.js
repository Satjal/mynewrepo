function calculateTotal() {
let subtotal =
(document.getElementById("burger").value * 8.99) +
(document.getElementById("pasta").value * 10.99) +
(document.getElementById("salad").value * 6.99);

let tax = subtotal * 0.13;
let total = subtotal + tax;

document.getElementById("result").innerHTML =
"Subtotal: $" + subtotal.toFixed(2) +
"<br>Tax (13%): $" + tax.toFixed(2) +
"<br><strong>Total: $" + total.toFixed(2) + "</strong>";
}
