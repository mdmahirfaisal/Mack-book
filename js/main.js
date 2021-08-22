// Ram size
function getRamSize(isBigRamSize) {
    const ramCost = document.getElementById("ram-cost");
    const bigRamSize = parseFloat(ramCost.innerText);
    let newRamSize = bigRamSize;
    if (isBigRamSize == true && bigRamSize < 180) {
        newRamSize = bigRamSize + 180;
    }

    if (isBigRamSize == false && bigRamSize > 0) {
        newRamSize = bigRamSize && 0;
    }
    ramCost.innerText = newRamSize;

    totalPrice();
}

// Storage size
function getStorageSize(is512StorageSize, is1TbStorageSize) {
    const storageCost = document.getElementById("storage-cost");
    const bigStorageSize = parseFloat(storageCost.innerText);
    let newStorageSize = bigStorageSize;

    if (is512StorageSize == true && bigStorageSize < 100) {
        newStorageSize = bigStorageSize + 100;
    } else {
        if (
            is1TbStorageSize == true &&
            bigStorageSize == 100 &&
            bigStorageSize < 180
        ) {
            newStorageSize = bigStorageSize + 80;
        } else {
            if (
                is512StorageSize == true &&
                bigStorageSize == 180 &&
                bigStorageSize <= 180
            ) {
                newStorageSize = bigStorageSize - 80;
            } else {
                if (is1TbStorageSize == true && bigStorageSize < 180) {
                    newStorageSize = bigStorageSize + 180;
                }
            }
        }
    }

    if ((is512StorageSize || is1TbStorageSize) == false && bigStorageSize > 0) {
        newStorageSize = bigStorageSize && 0;
    }
    storageCost.innerText = newStorageSize;

    totalPrice();
}

// delivery cost
function addDeliveryCost(isFirstDelivery) {
    const deliveryCost = document.getElementById("delivery-cost");
    const parseDeliveryCost = parseFloat(deliveryCost.innerText);
    let addDeliveryCost = parseDeliveryCost;
    if (isFirstDelivery == true && parseDeliveryCost < 20) {
        addDeliveryCost = parseDeliveryCost + 20;
    }
    if (isFirstDelivery == false && parseDeliveryCost > 0) {
        addDeliveryCost = parseDeliveryCost - 20;
    }
    deliveryCost.innerText = addDeliveryCost;

    totalPrice();
}

function totalPrice() {
    // ram
    const ramCost = document.getElementById("ram-cost");
    const bigRamSize = parseFloat(ramCost.innerText);
    // storage
    const storageCost = document.getElementById("storage-cost");
    const bigStorageSize = parseFloat(storageCost.innerText);
    // delivery
    const deliveryCost = document.getElementById("delivery-cost");
    const parseDeliveryCost = parseFloat(deliveryCost.innerText);
    // sub total
    let subTotalPrice = bigRamSize + bigStorageSize + parseDeliveryCost + 1299;

    document.getElementById("total-price").innerText = subTotalPrice;

    // before promo code
    document.getElementById("price-with-coupon").innerText = subTotalPrice;

    // after promo code
    const applyPromo = document.getElementById("apply-promo");
    applyPromo.addEventListener("click", function () {
        const promoValue = document.getElementById("promo-input");
        let usePromo = promoValue.value;
        let totalPrice = subTotalPrice;
        if (usePromo == "stevekaku") {
            let usePercentage = totalPrice / 100;
            document.getElementById("price-with-coupon").innerText =
                totalPrice - usePercentage * 20;
        }


    });
}
