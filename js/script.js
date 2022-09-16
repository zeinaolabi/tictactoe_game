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
let isClicked = []
let userOne = []
let userTwo = []
let firstUserScore = 0;
let secondUserScore = 0;
let firstUserTurn = true;

const checkWin = (array) => {
    //Find the intersection between the winCombinations array and user moves
    //If the intersection array have 3 elements, the player would win
    for(let i =0; i < winComb.length; i++){
        if(intersection(winComb[i], array).length == 3){
            return true;
        }
    }
    return false;
}

function showCoin(){
    //If the cell is clicked, stop
    if(isClicked.includes(this.id)){
        return
    }

    //Add image depending on the users' moves
    if(firstUserTurn){
        this.innerHTML = '<img src="images/red.png" alt="red coin">'
        firstUserTurn = false;
        isClicked.push(this.id);
        userOne.push(this.id);

        if(checkWin(userOne)){
            firstUserScore++;
            userOneScore.textContent = firstUserScore;
            restartGame();
        }
        return
    }

    firstUserTurn = true;
    this.innerHTML = '<img src="images/yellow.png" alt="red coin">'

    //Add cell id to isClicked array
    isClicked.push(this.id);
    userTwo.push(this.id);

    //Check which user won and add score
    if(checkWin(userTwo)){
        secondUserScore++;
        userTwoScore.textContent = secondUserScore;
        restartGame();
    }
}

const intersection = (arr1, arr2) => {
    // converting into Set
    const setA = new Set(arr1);
    const setB = new Set(arr2);

    let intersectionResult = [];

    //Find intersection between the two arrays
    for (let i of setB) {
        if (setA.has(i)) {
            intersectionResult.push(i);
        }   
    }
    
    return intersectionResult;
}

//Empty arrays and cells
const restartGame = () => {
    cells.forEach(cell => cell.innerHTML = "")
    userOne = []
    userTwo = []
    isClicked = []
}

cells.forEach(cell => cell.addEventListener('click', showCoin))
