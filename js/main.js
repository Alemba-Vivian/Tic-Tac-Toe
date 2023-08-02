// You’re going to store the gameboard as an array inside of a Gameboard object, 
// so start there! Your players are also going to be stored in objects, 
// and you’re probably going to want an object to control the flow of the game itself.

//creating a Gameboard object module
const Gameboard =()=>(()=>{
    let gameboard =[];

    const createGameBoard =()=>{
        gameboard =["O","X","O","X","O","X","O","X","O"];
        
        gameboard.forEach((element, index)=>{
            let board = document.querySelector('.grid-container');
            let div = document.createElement('div');
            div.classList.add('grid-item');
            div.innerText =`${element}`;
            console.log(div.innerText =`${element}`);
            board.appendChild(div);

        });
        return gameboard;
    }

    return{createGameBoard}

})();

const board = Gameboard();
console.log(board.createGameBoard());

