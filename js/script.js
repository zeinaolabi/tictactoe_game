const winComb = [
    ["1","2","3"],
    ["1","4","7"],
    ["2","5","8"],
    ["3","6","9"],
    ["3","4","5"],
    ["7","8","9"],
    ["1","5","9"],
    ["3","5","7"]
]
const cells = document.querySelectorAll(".cell");
const userOneScore = document.getElementById("userone_score");
const userTwoScore = document.getElementById("usertwo_score");
const isClicked = []
const userOne = []
const userTwo = []
let firstUserScore = 0;
let secondUserScore = 0;
let firstUserTurn = true;

const checkWin = (array) => {
    for(let i =0; i < winComb.length; i++){
        if(intersection(winComb[i], array).length == 3){
            return true;
        }
    }
    return false;
}

function showCoin(){
    if(isClicked.includes(this.id)){
        return
    }

    if(checkWin(userOne)){

    }

    if(firstUserTurn){
        this.innerHTML = '<img src="images/red.png" alt="red coin">'
        firstUserTurn = false;
        isClicked.push(this.id);
        userOne.push(this.id);
        counter++;
        return
    }
    firstUserTurn = true;
    isClicked.push(this.id);
    userTwo.push(this.id);
    this.innerHTML = '<img src="images/yellow.png" alt="red coin">'
    counter ++;
}


cells.forEach(cell => cell.addEventListener('click', showCoin))