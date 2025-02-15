import React, { useMemo, useState } from "react";

export const FindBomb = () => {
  const gridSize = 3;
  const totalTitles = gridSize * gridSize;
  //const bombPosition = Math.floor(Math.random() * totalTitles);
  const bombPosition = useMemo(() => {
    return Math.floor(Math.random() * totalTitles);
  }, totalTitles);
  console.log(bombPosition);

  const [clickedTiles, setclickedTiles] = useState([]);
  const [message, setmessage] = useState("Find Bomb 💣");
  const [gameOver, setgameOver] = useState(false);

  const handleClick = (index) => {
    if (index == bombPosition) {
      setgameOver(true);
      setmessage("💣 Boom ! Bomb Found...");
    } else {
      setmessage("Keep Searching...");
      setclickedTiles([...clickedTiles, index]);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{message}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize},50px)`,
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: totalTitles }).map((_, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                handleClick(index);
              }}
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                backgroundColor: clickedTiles.includes(index) ? "#ddd" : "#fff",
                cursor: "pointer",
              }}
            >
              {gameOver && index == bombPosition ? "💣" : ""}
            </div>
          );
        })}
      </div>
      {
        gameOver && <button>play again..</button>
      }
    </div>
  );
};
