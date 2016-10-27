var calculator = {
    sum : function(a, b){
        return a + b;
    }
};

$(document).ready(function() {
    console.log("doc ready");
    /*
    $.ajax({
        url: "http://albinsshop.albins-shop.3d7a7a7f.svc.dockerapp.io:8080/product",
        dataType: 'jsonp'
    }).then(function(data) {
        console.log("from rest call" + data);
    });
    */

    $.ajax({
        url:"http://albinsshop.albins-shop.3d7a7a7f.svc.dockerapp.io:8080/product",
        dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
        success:function(json){
            // do stuff with json (in this case an array)
            alert("Success");
        },
        error:function(e){
            console.log(e)
            alert("Error" + e);
        }
    });
});
