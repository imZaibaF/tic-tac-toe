import React from "react";
import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  // false =initially not editing the game-base
  // let btnCaption = "Edit";

  function handleEditClick() {
    setIsEditing((editing) => !editing); //state updatig function

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    //console.log(event);
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name"> {playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = "Save";
  }
  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "save" : "Edit"}</button>
      </li>
    </>
  );
}

//NOTE: 1. updating state based on old state ( pass a function)
