import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";
import YouWon from "./YouWon";
import YouFailed from "./YouFailed";

function GameOver() {
  const { gameOver, setGameOver, correctWord, currAttempt } =
    useContext(AppContext);

  useEffect(() => {
    if (gameOver.gameOver) {
      setTimeout(() => {
        setGameOver((prevGameOver) => ({ ...prevGameOver, active: true }));
      }, 50);
    }
  }, [gameOver.gameOver, setGameOver]);

  return (
    <div className={`gameOver ${gameOver.active ? "active" : ""}`}>
      {gameOver.guessedWord ? (
        <YouWon
          gameOver={gameOver}
          currAttempt={currAttempt}
          correctWord={correctWord}
        />
      ) : (
        <YouFailed correctWord={correctWord} />
      )}
    </div>
  );
}

export default GameOver;
