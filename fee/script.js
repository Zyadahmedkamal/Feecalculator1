document.getElementById('calculate').addEventListener('click', function () {
  const amount = parseFloat(document.getElementById('amount').value);
  const percentage = parseFloat(document.getElementById('percentage').value);

  // التحقق من القيم الفارغة أو السالبة
  if (isNaN(amount) || isNaN(percentage)) {
      document.getElementById('result-text').textContent = 'Please enter valid values.';
      return;
  }

  if (amount < 0 || percentage < 0) {
      document.getElementById('result-text').textContent = 'Error: Negative values are not allowed.';
      return;
  }

  const fee = (amount * percentage) / 100;
  const total = amount + fee;

  document.getElementById('result-text').textContent = `Fee: ${fee.toFixed(2)} EGP, Total: ${total.toFixed(2)} EGP`;
});
