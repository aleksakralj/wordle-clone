import React, { useState } from "react";
import Letter from "../helper/Letter";

function Board() {
  return (
    <div className="board">
      <div className="row">
        <Letter leterPosition={0} attemptValue={0} />
        <Letter leterPosition={1} attemptValue={0} />
        <Letter leterPosition={2} attemptValue={0} />
        <Letter leterPosition={3} attemptValue={0} />
        <Letter leterPosition={4} attemptValue={0} />
      </div>
      <div className="row">
        <Letter leterPosition={0} attemptValue={1} />
        <Letter leterPosition={1} attemptValue={1} />
        <Letter leterPosition={2} attemptValue={1} />
        <Letter leterPosition={3} attemptValue={1} />
        <Letter leterPosition={4} attemptValue={1} />
      </div>
      <div className="row">
        <Letter leterPosition={0} attemptValue={2} />
        <Letter leterPosition={1} attemptValue={2} />
        <Letter leterPosition={2} attemptValue={2} />
        <Letter leterPosition={3} attemptValue={2} />
        <Letter leterPosition={4} attemptValue={2} />
      </div>
      <div className="row">
        <Letter leterPosition={0} attemptValue={3} />
        <Letter leterPosition={1} attemptValue={3} />
        <Letter leterPosition={2} attemptValue={3} />
        <Letter leterPosition={3} attemptValue={3} />
        <Letter leterPosition={4} attemptValue={3} />
      </div>
      <div className="row">
        <Letter leterPosition={0} attemptValue={4} />
        <Letter leterPosition={1} attemptValue={4} />
        <Letter leterPosition={2} attemptValue={4} />
        <Letter leterPosition={3} attemptValue={4} />
        <Letter leterPosition={4} attemptValue={4} />
      </div>
      <div className="row">
        <Letter leterPosition={0} attemptValue={5} />
        <Letter leterPosition={1} attemptValue={5} />
        <Letter leterPosition={2} attemptValue={5} />
        <Letter leterPosition={3} attemptValue={5} />
        <Letter leterPosition={4} attemptValue={5} />
      </div>
    </div>
  );
}

export default Board;
