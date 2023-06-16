import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function YouFailed({ correctWord }) {
  return (
    <div className="end-message">
      <h1>Wrong, You Failed!!</h1>
      <div>
        <FontAwesomeIcon
          icon={faTimesCircle}
          size="10x"
          color="rgb(186,12,47)"
        />
      </div>
      <h3>Correct word was: {correctWord}</h3>
      <h3>Better luck next time!</h3>
    </div>
  );
}

export default YouFailed;
