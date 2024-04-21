function updatePrice(productId) {
    // Mendapatkan harga produk dari database (contoh)

    let productPrice = document.getElementById(
        "productPrice-" + productId
    ).value;

    // Mendapatkan nilai input jumlah kuantitas
    var inputQuantity = $("#quantity-input-" + productId).val();

    // Mengalikan harga produk dengan jumlah kuantitas
    var totalPrice = productPrice * inputQuantity;

    // Menampilkan total harga
    $("#total-price-" + productId).text(
        "Total Price: $" + totalPrice.toFixed(2)
    );
    document.getElementById("price-" + productId).value = totalPrice;
}

const inputElements = document.getElementsByClassName("oke");

// Menambahkan event listener untuk setiap elemen input
Array.from(inputElements).forEach(function (inputElement) {
    inputElement.addEventListener("input", function (event) {
        // Mendapatkan nilai yang baru dimasukkan
        const newValue = event.target.value;

        // Menampilkan nilai baru ke konsol
        console.log("Nilai baru:", newValue);
    });
});

document.querySelectorAll("[data-input-counter]").forEach((element) => {
    let productId = element.getAttribute("data-product-id");
    let value = element.value;
    if (value < 1) {
        console.log("ya");
        let btn = document.getElementById("submit");
        btn.disabled = true;
    }
    // console.log(document.getElementById("quantity-input-" + productId));

    // console.log(element.value);
});

document.querySelectorAll("#product").forEach((oke) => {
    console.log(oke);
});

function tes(variable) {
    let getIdModal = variable.getAttribute("data-modal-toggle");
    let modalElement = document.getElementById(getIdModal);
    let input = modalElement.querySelector("input");
    let btn = modalElement.querySelector("#submit");
    let quantity = parseInt(input.value);
    let productId = input.getAttribute("data-product-id");
    let productPrice = parseFloat(input.getAttribute("data-product-price"));

    let incrementButton = modalElement.querySelector("#increment-button");
    let decrementButton = modalElement.querySelector("#decrement-button");

    incrementButton.addEventListener("click", function () {
        if (input.value > 0) {
            btn.disabled = false;
            decrementButton.disabled = false;
        }

        quantity++;
        let totalPrice = productPrice * quantity;
        document.getElementById("price-" + productId).value = totalPrice;
    });

    decrementButton.addEventListener("click", function () {
        if (input.value < 1) {
            btn.disabled = true;
            decrementButton.disabled = true;
            document.getElementById("price-" + productId).value = 0;
        } else {
            btn.disabled = false;
            decrementButton.disabled = false;
        }

        quantity--;
        let totalPrice = productPrice * quantity;
        document.getElementById("price-" + productId).value = totalPrice;
    });

    input.addEventListener("input", function () {
        console.log(input.value);
        if (input.value == "" || input.value < 1) {
            btn.disabled = true;
            decrementButton.disabled = true;
        } else {
            btn.disabled = false;
            decrementButton.disabled = false;
        }

        let totalPrice = productPrice * input.value;
        document.getElementById("price-" + productId).value = totalPrice;
    });
}

// document
//     .querySelectorAll(
//         "[data-input-counter-increment], [data-input-counter-decrement]"
//     )
//     .forEach((button) => {
//         button.addEventListener("click", function () {
//             let dataInputCounterIncrement = this.getAttribute(
//                 "data-input-counter-increment"
//             );
//             let dataInputCounterDecrement = this.getAttribute(
//                 "data-input-counter-decrement"
//             );

//             if (this.hasAttribute("data-input-counter-increment")) {
//                 // console.log(dataInputCounterIncrement);
//                 let getElementIncrement = document.getElementById(
//                     dataInputCounterIncrement
//                 );
//                 let quantityIncrement = parseInt(getElementIncrement.value) + 1;
//                 let productIdIncrement = parseInt(
//                     getElementIncrement.getAttribute("data-product-id")
//                 );
//                 let priceIncrement = parseFloat(
//                     getElementIncrement.getAttribute("data-product-price")
//                 );

//                 let totalPrice = priceIncrement * quantityIncrement;
//                 document.getElementById("price-" + productIdIncrement).value =
//                     totalPrice;

//                 if (quantityIncrement <= 0) {
//                     document.getElementById(
//                         "price-" + productIdIncrement
//                     ).value = 0;
//                 }
//             }

//             if (this.hasAttribute("data-input-counter-decrement")) {
//                 let getElementDecrement = document.getElementById(
//                     dataInputCounterDecrement
//                 );
//                 let quantityDecrement = parseInt(getElementDecrement.value) - 1;
//                 let productIdDecrement = parseInt(
//                     getElementDecrement.getAttribute("data-product-id")
//                 );
//                 let priceDecrement = parseFloat(
//                     getElementDecrement.getAttribute("data-product-price")
//                 );
//                 let totalPrice = priceDecrement * quantityDecrement;
//                 document.getElementById("price-" + productIdDecrement).value =
//                     totalPrice;

//                 if (quantityDecrement <= 0) {
//                     document.getElementById(
//                         "price-" + productIdDecrement
//                     ).value = 0;
//                     console.log(document.getElementById("submit"));
//                     let btn = document.getElementById("submit");
//                     btn.disabled = true;
//                 }
//             }
//         });
//     });

// document
//     .querySelectorAll("[data-input-counter-decrement]")
//     .forEach((button) => {
//         button.addEventListener("click", function () {
//             let dataInputCounterDecrement = this.getAttribute("data-input-counter-decrement");
//             let input = document.getElementById(inputId);
//             let quantity = parseInt(input.value);
//             let quantityDecrement = quantity - 1;
//             let productId = parseInt(input.getAttribute("data-product-id"));
//             let price = parseFloat(input.getAttribute("data-product-price"));

//             // if (quantity > 1) {
//             let totalPrice = price * quantityDecrement;
//             document.getElementById("price-" + productId).value = totalPrice;
//             if (quantityDecrement == 0) {
//                 // quantity = 0;
//                 this.disabled = true;
//             }
//             var decrementButton = document.getElementById("decrement-button");
//             if (quantityDecrement > 0) {
//                 console.log("Lebih dari 0");
//                 decrementButton.disabled = false;
//             }
//             console.log(quantity);
//             console.log(quantityDecrement);
//         });
//     });

$(document).ready(function () {
    $(".oke").on("input", function () {
        // var productId = $(this).attr("id").split("-")[2];
        let productId = this.getAttribute("data-product-id");
        console.log(productId);
        updatePrice(productId);
    });
});

// function oke(id) {
//     console.log(id);
// }
// $(document).ready(function () {
//     $(".oke").on("input", function () {
//         var productId = $(this).attr("id").split("-");
//         // console.log(productId);
//         var inputQuantity = $(this).val();
//         if (inputQuantity != 0 || inputQuantity == "") {
//             document.getElementById("price-" + productId[2]).value *=
//                 inputQuantity;
//         }
//     });
//     // console.log("tes");
// });
