const calculateSupply = function (age, amountPerDay) {
    let maxAge = 80;
    let neededTotal = (amountPerDay * 365) * (maxAge - age);
    let message = "You will need " + neededTotal + " to last you until the ripe old age of" + maxAge;
    console.log(message);
}

calculateSupply(14,5);