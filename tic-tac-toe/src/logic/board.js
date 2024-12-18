import { WINNER_COMBOS } from "../constants.js";

export  const checkWinnerFrom = (boardToCheck)=>{
    // Revisamos todas las combinaciones ganadoras
    // para ver si X u O ganó
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
  
      if (boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]) 
        {
        return boardToCheck[a]; // Devuelve el símbolo del ganador (X u O)
      }
    }
    return null; // No hay ganador
}

export  const checkEndGame = (newBoard)=>{
    // Revisamos si hay un empate
    // si no hay más espacios vacíos
    // en el tablero
    return newBoard.every((square) => square !== null)
}