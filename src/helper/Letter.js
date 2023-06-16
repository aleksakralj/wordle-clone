import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ leterPosition, attemptValue }) {
  const {
    board,
    correctWord,
    currAttempt,
    disabledLetters,
    setDisabledLetters,
  } = useContext(AppContext);
  const letter = board[attemptValue][leterPosition];

  const correct = correctWord.toUpperCase()[leterPosition] === letter;

  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  const letterState =
    currAttempt.attempt > attemptValue &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
