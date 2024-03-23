function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const casualNumbers = [];

for (let k = 1; k <= 5; k++){
    let number = getRndInteger(1, 100);
    if (number != casualNumbers){
        casualNumbers.push(number)
    }
}console.log(casualNumbers)