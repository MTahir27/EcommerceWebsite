function increment() {
    document.getElementById('quantity').stepUp();
}
function decrement() {
    if(document){
        var number = document.getElementById("quantity").value;
        if(number > 1){
            document.getElementById('quantity').stepDown();
        }
        else{};
        
    }
    else{}
}

