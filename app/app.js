var calculator = {
    sum : function(a, b){
        return a + b;
    }
};

var cart = [];
var products = [];

$(document).ready(function() {
    var productHolder = document.getElementById("product-holder");

    var sylt = new product(1, "Sylt", "Smakar hallon");
    var kaffe = new product(2, "Kaffe", "Dis get you going");
    var crack = new product(3, "Crack", "Dis really get you going!");

    products.push(sylt);
    products.push(kaffe);
    products.push(crack);

    for (var i = 0; i < products.length; i++){
        var productI = products[i];
        var div = document.createElement('div');
        div.dataset.productid = productI.id;
        div.innerHTML = productI.name + ", " + productI.description;

        var button = document.createElement('button');
        button.innerHTML = "add";

        div.addEventListener("click", addToCart, false);

        div.appendChild(button);
        productHolder.appendChild(div);
    }
});

var addToCart =  function(){
    var productId = this.dataset.productid;
    function foo(product) {
        console.log("start");
        console.log(product.id);
        console.log(productId);
        console.log(product.id == productId);
        console.log("end");
        return product.id == productId;
    }
    var product = products.filter(foo)[0];
    cart.push(product);
    updateCart();
    console.log("add to cart " + product.name);

};

function updateCart() {
    var cartHolder = document.getElementById("cart-holder");
    // remove everyting in cart holder
    while (cartHolder.firstChild) {
        cartHolder.removeChild(cartHolder.firstChild);
    }
    // add everything from cart array to holder
    for (var i = 0; i < cart.length; i++){
        var product = cart[i];
        var div = document.createElement('div');
        div.dataset.productid = product.id;
        div.dataset.numberincartarray = i;
        div.innerHTML = product.name + ", " + product.description;
        div.addEventListener("click", removeFromCart, false);
        cartHolder.appendChild(div);
    }
}

var removeFromCart = function(){
    cart.splice(this.dataset.numberincartarray, 1);
    updateCart();
};
