var calculator = {
    sum : function(a, b){
        return a + b;
    }
};

$(document).ready(function() {
    $.ajax({
        url: "http://albinsshop.albins-shop.3d7a7a7f.svc.dockerapp.io:8080/product"
    }).then(function(data) {
        console.log("from rest call" + data);
    });
});
