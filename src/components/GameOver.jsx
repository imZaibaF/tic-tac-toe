import React from "react";

export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      {winner && <h2> {winner} won, Game Over</h2>}
      {!winner && <p>It's a draw</p>}

      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
