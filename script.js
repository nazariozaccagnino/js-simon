function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const casualNumbers = [];
const startGame = document.getElementById('startgame');

startGame.addEventListener ('click', function (){
    
    for (let k = 1; k <= 5; k++){
        let number = getRndInteger(1, 100);
        if (number != casualNumbers.value){
            casualNumbers.push(number)
        }
    }console.log(casualNumbers, 'array dei numeri casuali');

    casualNumbers.forEach((element) => {
       const span = document.createElement("span");
        span.innerHTML = ` ${element}`;
        span.classList.add('fs-1', 'text-center', 'card')
        document.body.appendChild(span);
    }
    );  
    
},{once : true})

//creo la funzione per nascondere i numeri
function hideNumbers(){
    let myList = document.getElementsByTagName("span");
    for (i = 0; i < myList.length; i++) {
        myList[i].className = "d-none";
}
}

setTimeout(hideNumbers, 4000)

//creo la funzione per generare i form

function createForms(){
    for(let i=0; i < 5; i++){
        const form = document.createElement("div");
        form.innerHTML = `<input type="number" class="form-control" placeholder="Inserisci numero">`;
        // span.classList.add('fs-1', 'text-center', 'card')
        document.body.appendChild(form);
    }
}

setTimeout(createForms, 6000)