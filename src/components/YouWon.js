import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function YouWon({ gameOver, currAttempt, correctWord }) {
  return (
    <div className="end-message">
      <h1>Correct, You Won!!</h1>
      <div>
        <FontAwesomeIcon icon={faCheckCircle} size="10x" color="green" />
      </div>
      <h3>Correct word was: {correctWord}</h3>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
    </div>
  );
}

export default YouWon;
