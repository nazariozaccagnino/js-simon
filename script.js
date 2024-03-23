function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


const startGame = document.getElementById('startgame');

startGame.addEventListener ('click', function (){
    const casualNumbers = [];
    for (let k = 1; k <= 5; k++){
        let number = getRndInteger(1, 100);
        if (number != casualNumbers.value){
            casualNumbers.push(number)
        }
    }console.log(casualNumbers, 'array dei numeri casuali');

    casualNumbers.forEach((element) => {
       const div = document.createElement("div");
        div.innerHTML = `${element}`;
        document.body.appendChild(div);
    }
    );

    
})


