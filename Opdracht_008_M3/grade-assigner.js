let grade="";

const assignGrade = function(i){
    if (i > 90) {
        return grade='A';
    } else if (i > 80) {
        return grade='B';
    } else if (i > 70) {
        return grade='C';
    } else if (i > 65) {
        return grade='D';
    } else {
        return grade='F';
    }
}

for(i=60; i<=100; i++){
assignGrade(i);
console.log("Voor "+i+" punten krijg je een "+grade);
}