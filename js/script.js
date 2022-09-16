const win_com = [
    [1,2,3],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [3,4,5],
    [7,8,9],
    [1,5,9],
    [3,5,7]
]
const cells = document.querySelectorAll(".cell");
let firstUserTurn = true;


function showCoin(){
    if(firstUserTurn){
        this.innerHTML = '<img src="images/red.png" alt="red coin">'
        firstUserTurn = false;
        return
    }
    this.innerHTML = '<img src="images/yellow.png" alt="red coin">'
}
cells.forEach(cell => cell.addEventListener('click', showCoin))