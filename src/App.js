import "./App.css";
import Keyboard from "./components/Keyboard";
import Board from "./components/Board";
import { boardDefault, generateWordSet } from "./helper/Word";
import { createContext, useCallback, useEffect, useState } from "react";
import GameOver from "./components/GameOver";
import swal from "sweetalert";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const [correctWord, setCorrectWord] = useState("");

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter" && gameOver.gameOver) {
      handleRestart();
    }
  });

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPosition > 4) return;

    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPosition] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({
      ...currAttempt,
      letterPosition: currAttempt.letterPosition + 1,
    });
  };

  const onDelete = () => {
    if (currAttempt.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPosition - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({
      ...currAttempt,
      letterPosition: currAttempt.letterPosition - 1,
    });
  };

  const onEnter = () => {
    if (currAttempt.letterPosition !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    console.log(correctWord);

    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPosition: 0 });
    } else {
      swal("Word Not Found, press space and try again", "", "warning");
    }

    if (currWord.toLowerCase() === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  };

  const handleRestart = () => {
    window.location.reload();
  };

  useEffect(() => {
    setGameOver(gameOver);
  }, [gameOver]);

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
          onEnter,
          onDelete,
          correctWord,
          disabledLetters,
          setDisabledLetters,
          gameOver,
          setGameOver,
          handleRestart,
        }}
      >
        <h1 className="name">Wordle</h1>
        <div className="game">
          <Board />
          <div className="game-controllers">
            {gameOver.gameOver ? <GameOver /> : <Keyboard />}
            <button onClick={handleRestart}>Restart</button>
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
