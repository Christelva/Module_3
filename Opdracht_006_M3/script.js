//function makeSandwich
//Get one slice of bread.
//Add filling.
//Put a slice of bread on top.

function makeSandwich() {
console.log("Get one slice of bread.")
console.log("Add filling.")
console.log("Put a slice of bread on top.")
}

 makeSandwich();

 //Ik zie de stappen verschijnen.

 function makeSandwich(topping) {
    console.log("There you go a sandwich with",topping); //function declaration
    }
    
     makeSandwich("cheese"); //function being called
     makeSandwich("ham"); 

function calculateDiscountedPrice(totalAmount, discount) {
    return Math.round(totalAmount - discount);

}
console.log(calculateDiscountedPrice(100,30));

function calculateDiscount(totalAmount, discount){
    if (totalAmount > 25) {
        return Math.round(totalAmount - discount);
    }
    else {
        return totalAmount;
    }
}

console.log(calculateDiscount(26, 10));