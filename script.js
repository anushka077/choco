const bundleForm = document.getElementById('bundle-form');
const totalPriceElement = document.getElementById('total-price');

bundleForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let totalPrice = 0;
    const chocolatePrices = [5,15,5,15,5,25,5,25];

    for (let i = 1; i <= 8; i++) {
        const quantity = parseInt(document.getElementById(`chocolate${i}`).value);
        const price = chocolatePrices[i - 1];
        totalPrice += quantity * price;
    }

    totalPriceElement.textContent = totalPrice.toFixed(2);
});