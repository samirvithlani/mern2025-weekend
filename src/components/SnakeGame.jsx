import React, { useState, useEffect } from "react";
import "../assets/snakegame.css";

const GRID_SIZE = 10;
const INITIAL_SNAKE = [{ x: 5, y: 5 }];
const INITIAL_DIRECTION = { x: 0, y: 1 };

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(generateFood);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);

  function generateFood() {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
  }

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(moveSnake, 200);
    return () => clearInterval(interval);
  }, [snake, gameOver]);

  function moveSnake() {
    const newSnake = [...snake];
    const head = {
      x: newSnake[0].x + direction.x,
      y: newSnake[0].y + direction.y
    };
    
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE ||
        newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true);
      return;
    }
    
    newSnake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      setFood(generateFood());
    } else {
      newSnake.pop();
    }
    setSnake(newSnake);
  }

  useEffect(() => {
    function handleKeyPress(event) {
      switch (event.key) {
        case "ArrowUp":
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    }
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction]);

  return (
    <div className="game-container">
      <h2>Snake Game</h2>
      {gameOver && <h3>Game Over! Press Restart</h3>}
      <div className="grid">
        {Array.from({ length: GRID_SIZE }, (_, row) => (
          <div key={row} className="row">
            {Array.from({ length: GRID_SIZE }, (_, col) => {
              const isSnake = snake.some(segment => segment.x === col && segment.y === row);
              const isFood = food.x === col && food.y === row;
              return (
                <div key={col} className={`cell ${isSnake ? "snake" : ""} ${isFood ? "food" : ""}`}></div>
              );
            })}
          </div>
        ))}
      </div>
      <button onClick={() => {
        setSnake(INITIAL_SNAKE);
        setFood(generateFood());
        setDirection(INITIAL_DIRECTION);
        setGameOver(false);
      }}>Restart</button>
    </div>
  );
}
