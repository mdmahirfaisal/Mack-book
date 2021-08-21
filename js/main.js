/// 8 GB ram button

document.getElementById('ram-8gb').addEventListener('click', function () {
    const ram8gb = document.getElementById('ram-price');
    const ramText = parseInt(ram8gb.innerText);
    if (ram8gb.innerText == 180) {
        ram8gb.innerText = ramText - 180;
    }

    const productTotal = document.getElementById('total-price');
    const productTotalvalue = parseInt(productTotal.innerText);

    if (ramText == 180) {
        productTotal.innerText = productTotalvalue - 180;
    }


});
// 16gb  ram  button 

document.getElementById('ram-16gb').addEventListener('click', function () {
    const ram16gb = document.getElementById('ram-price');
    const ramText = parseFloat(ram16gb.innerText);
    ram16gb.innerText = ramText + 180;
    if (ramText > 179) {
        ram16gb.innerText = ramText;
    }
    const productTotal = document.getElementById('total-price');
    const productTotalvalue = parseInt(productTotal.innerText);

    if (ramText == 0) {
        productTotal.innerText = productTotalvalue + 180;
    }

});
///////////////////////////////////////////////////////////////
// 256gb  storage  button

document.getElementById('rom-256gb').addEventListener('click', function () {
    let storage16Gb = document.getElementById('storage-cost');
    let storageText = parseInt(storage16Gb.innerText);
    if (storage16Gb.innerText > 0) {
        storage16Gb.innerText = storageText - 100;
        console.log();
    }

    const productTotal = document.getElementById('total-price');
    let productTotalValue = parseInt(productTotal.innerText);

    if (storageText >= 100) {
        productTotal.innerText = productTotalValue - 100;
        console.log();
    }


    if (storage16Gb.innerText > 0) {
        storage16Gb.innerText = storageText - 180;
        console.log();
    }

    if (storageText == 180) {
        productTotal.innerText = productTotalValue - 180;
        console.log(productTotalValue, 'clicded');
    }

});//////////////////////////////////////////////////////////////
// 512gb  storage button

document.getElementById('rom-512gb').addEventListener('click', function () {

    const storage512Gb = document.getElementById('storage-cost');
    const storageValue = parseFloat(storage512Gb.innerText);
    storage512Gb.innerText = storageValue + 100;
    if (storageValue > 99) {
        storage512Gb.innerText = storageValue;
    }

    const productTotal = document.getElementById('total-price');
    const productTotalvalue = parseInt(productTotal.innerText);

    if (storageValue == 0) {
        productTotal.innerText = productTotalvalue + 100;
    }

});///////////////////////////////////////////////////////////////

// 1tb  storage  button
document.getElementById('rom-1tb').addEventListener('click', function () {
    const storage1Tb = document.getElementById('storage-cost');
    const storageText = parseFloat(storage1Tb.innerText);
    storage1Tb.innerText = storageText + 180;
    if (storageText > 179) {
        storage1Tb.innerText = storageText;
    }

    const productTotal = document.getElementById('total-price');
    const productTotalvalue = parseInt(productTotal.innerText);

    if (storageText == 0) {
        productTotal.innerText = productTotalvalue + 180;
    }

});///////////////////////////////////////////////////////////////
// free delivery  button

document.getElementById('free-delivery').addEventListener('click', function () {
    const delivery = document.getElementById('delivery-cost');
    const deliveryValue = parseFloat(delivery.innerText);

    if (delivery.innerText > 0) {
        delivery.innerText = deliveryValue - 20;
    }

    const productTotal = document.getElementById('total-price');
    const productTotalvalue = parseInt(productTotal.innerText);

    if (deliveryValue == 20) {
        productTotal.innerText = productTotalvalue - 20;
    }

});////////////////////////////////////////////////////////////////
// delivery  charge 20% button

document.getElementById('delivery-charge').addEventListener('click', function () {
    const delivery = document.getElementById('delivery-cost');
    const deliveryValue = parseFloat(delivery.innerText);

    if (delivery.innerText <= 0) {
        delivery.innerText = deliveryValue + 20;
    }

    const productTotal = document.getElementById('total-price');
    const productTotalvalue = parseInt(productTotal.innerText);

    if (deliveryValue == 0) {
        productTotal.innerText = productTotalvalue + 20;
    }


});/////////////////////////////////////////////////////////////////

//  kupon  code section  total price

document.getElementById('promo-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const promoValue = promoInput.value;
    if (promoInput.value == 'stevekaku') {

        const productTotal = document.getElementById('total-price');
        const productTotalvalue = parseInt(productTotal.innerText);

        const priceKupon = document.getElementById('total-price-kupon');
        const priceKuponValue = parseInt(priceKupon.innerText);
        let totalResult = productTotalvalue / 100;
        totalResult = totalResult * 20;
        priceKupon.innerText = priceKuponValue - totalResult;

        console.log('20%  discoount');
    }
    else {

        const productTotal = document.getElementById('total-price');
        const productTotalvalue = parseInt(productTotal.innerText);

        const priceKupon = document.getElementById('total-price-kupon');
        let priceKuponValue = parseInt(priceKupon.innerText);
        priceKupon.innerText = productTotalvalue;

        console.log('no discount');
    }

    promoInput.value = '';

});
/////////////////////////////////////////////////////////////////