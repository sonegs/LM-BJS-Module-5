// Lista de la compra
const store = [
    { id: 1, name: "Rice", market: "Mercadona", count: 1, price: 1.40, available: true, prime: false },
    { id: 2, name: "Bread", market: "Lidl", count: 3, price: 0.75, available: true, prime: true },
    { id: 3, name: "Oil", market: "MasyMas", count: 1, price: 11.99, available: true, prime: true },
    { id: 4, name: "Chicken", market: "Aldi", count: 2, price: 3.10, available: true, prime: false },
    { id: 5, name: "Strawberry", market: "Carrefour", count: 1, price: 4.90, available: true, prime: false },
    { id: 6, name: "Fish", market: "Alcampo", count: 1, price: 6.90, available: true, prime: false },
    { id: 7, name: "Tomatoes", market: "DIA", count: 4, price: 10.40, available: true, prime: false },
    { id: 8, name: "Watermelon", market: "Mercadona", count: 1, price: 2.50, available: true, prime: true }
];
let total = 0;
let show = document.getElementById("resultado");

// Llamada a las funciones de los botones
document.getElementById("Market").addEventListener("click", market);
document.getElementById("DeleteProduct").addEventListener("click", deleteProduct);
document.getElementById("Total").addEventListener("click", calcular);
document.getElementById("prime").addEventListener("click", primerProducts);

function market() { //lista de la compra

    for (product of store) {
        show.innerHTML += "<ul><li>" + product.name + "</li></ul>";
    }
}

// Función para eliminar un elemento de la lista de la compra
function deleteProduct() {
    let randomNumber = parseInt(Math.random() * store.length); // me da un número random en función de la longitud de mi variable store
    let storeLess = store.splice(randomNumber, 1);
    show.innerHTML += "<h5> Hemos borrado el producto " + storeLess[0].name + " de la lista de la compra</h5>";
    market();
}

function calcular() { // Suma el total del carrito de la compra
    for (i = 0; i < store.length; i++) {
        total += store[i].price * store[i].count;
    }
    desc(total);
    total = 0;
}

function desc(finalPrice) { // Hace un descuento del 5% si el total es mayor de 50 €
    if (finalPrice > 50) {
        discount = finalPrice * 0.05;
        show.innerHTML += "<h5> Se ha hecho un descuento del 5% en su compra!</h5>";
        finalPrice -= discount;
        isPrime(finalPrice);
    } else {
        isPrime(finalPrice);
    }
}

function primerProducts() { //productos prime
    show.innerHTML = ""; // para limpiar el cuerpo del body y mostrar los productos prime
    document.getElementById("resultado").innerHTML += "<h4>Los siguientes productos son prime: </h4>";
    for (product of store) {
        if (product.prime == true) {
            show.innerHTML += "<ul><li>" + product.name + ", de supermercado " + product.market + "</li></ul>";
        }
    }
}

function isPrime(price) { // comprueba si todos los productos son Prime
    let check = 0;
    for (product of store) {
        if (product.prime == true) {
            check++;
        }
    }
    if (check == store.length) {
        show.innerHTML += "<h4>" + Math.round(price * 100) / 100 + " euros, gastos de envío cero</h4>";
    } else {
        show.innerHTML += "<h4>" + Math.round(price * 100) / 100 + " euros con gastos de envío</h4>";
    }
}