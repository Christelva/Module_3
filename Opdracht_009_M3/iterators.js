const colors = ["yellow","blue","red","orange"];

let colorsNum = 0;
while (colorsNum < colors.length){
    console.log(colors[colorsNum]);
    colorsNum++ ;
} 

for (i=0; i<colors.length; i++){
    console.log(colors[i]);
}

colors.forEach(i => console.log(i));

//while loop neemt 4 regels in beslag, for loop 2 regels 
//for each neemt 1 regel in beslag
//array method is sneller en makkelijker op te stellen en zieter minder ingewikkeld uit

const zooAnimals = {
    elephant: 3,
    penguin: 10,
    snake: 5,
    raccoon: 4,
    lion: 5,
}

const keys= Object.keys(zooAnimals); //array that contains the properties of an object
const values = Object.values(zooAnimals); //array that contains the calues of every propert
const entries = Object.entries(zooAnimals); //creates array of arrays

for (const key of keys){
    console.log(key)
}

