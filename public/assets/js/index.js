const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(number);
};

document.querySelectorAll("#price").forEach((priceElement) => {
    let temp = priceElement.textContent;
    priceElement.textContent = formatRupiah(temp);
});

function checkOut(variable) {
    let getIdModal = variable.getAttribute("data-modal-toggle");
    let modalElement = document.getElementById(getIdModal);
    let input = modalElement.querySelector("input");
    let btn = modalElement.querySelector("#submit");
    let productId = input.getAttribute("data-product-id");
    let productPrice = input.getAttribute("data-product-price");
    let productStock = input.getAttribute("data-product-stock");

    let labelProductPrice = document.getElementById("price-" + productId);
    let temp = labelProductPrice.textContent.replace(",00", "").replace(/\D/g, "")
    labelProductPrice.textContent = formatRupiah(temp);

    let incrementButton = modalElement.querySelector("#increment-button");
    let decrementButton = modalElement.querySelector("#decrement-button");

    let totalPrice = ""

    incrementButton.addEventListener("click", function () {
        if (input.value > 0) {
            btn.disabled = false;
            decrementButton.disabled = false;
        }
        if (parseInt(input.value) >= parseInt(productStock)) {
            incrementButton.disabled = true;
        } else {
            incrementButton.disabled = false;
        }

        totalPrice = productPrice * input.value;

        document.getElementById("price-" + productId).textContent = formatRupiah(totalPrice);
    });

    decrementButton.addEventListener("click", function () {
        if (input.value < 1) {
            btn.disabled = true;
            decrementButton.disabled = true;
            document.getElementById("price-" + productId).textContent = formatRupiah(0);
        } else {
            btn.disabled = false;
            decrementButton.disabled = false;
        }

        if (parseInt(input.value) >= parseInt(productStock)) {
            incrementButton.disabled = true;
        } else {
            incrementButton.disabled = false;
        }

        totalPrice = productPrice * input.value;
        document.getElementById("price-" + productId).textContent = formatRupiah(totalPrice);
    });

    input.addEventListener("input", function () {
        if (input.value == "" || input.value < 1) {
            btn.disabled = true;
            decrementButton.disabled = true;
        } else {
            btn.disabled = false;
            decrementButton.disabled = false;
        }

        if (parseInt(input.value) >= parseInt(productStock)) {
            incrementButton.disabled = true;
        }
        if (parseInt(input.value) > parseInt(productStock)) {
            console.log("inputan lebih banyak");
            btn.disabled = true;
            incrementButton.disabled = true;
        } else {
            incrementButton.disabled = false;
        }

        totalPrice = productPrice * input.value;
        document.getElementById("price-" + productId).textContent = formatRupiah(totalPrice);
    });
}
