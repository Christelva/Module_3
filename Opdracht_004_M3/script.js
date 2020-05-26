let age = 26;
let isFemale = false;
let driverStatus = "bob";
let name = "Sarah";
let totalAmount = 100;

if (totalAmount >= 100 ){
    console.log("U krijgt een gratis fles champagne!")
}
else if (totalAmount >= 50){
    console.log("U krijgt gratis nacho's!")
}
else if (totalAmount >= 25) {
    console.log("U krijgt gratis bitterballen!");
}
else {
    console.log("Bij een besteding van 25 euro of meer krijgt u gratis bitterballen!")
}
 if (name === "Sarah" || "Bram"){
     console.log("U krijgt een gratis biertje!")
 }
 
if (age >= 18 && age <= 25){
    console.log("je krijgt 50% korting!")
}
else {
    console.log("Je krijgt geen korting")
}

if (driverStatus == "bob") {
    console.log("U mag rijden")
}
else {
    console.log("U mag niet rijden")
}

if (isFemale == true){
    console.log("U bent een vrouw")
}
else {
    console.log("u bent geen vrouw")
}

if (age >= 18) {
    console.log("Je mag naar binnen")
}
else {
    console.log("Je bent te jong, je mag niet naar binnen.")
}