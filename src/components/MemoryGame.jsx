import React, { useState, useMemo } from "react";
import "../assets/memorygame.css";

const cardImages = [
  "🍎", "🍌", "🍒", "🍇", "🍉", "🥝", "🍍", "🍓"
];

const shuffleCards = () => {
  const shuffled = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((item, index) => ({ id: index, emoji: item, flipped: false }));
  return shuffled;
};

export default function MemoryGame() {
  const [cards, setCards] = useState(() => shuffleCards());
  const [selected, setSelected] = useState([]);

  const handleCardClick = (id) => {
    if (selected.length === 2) return;
    const updatedCards = cards.map((card) =>{
     return card.id === id ? { ...card, flipped: true } : card
    }
    );
    setCards(updatedCards);
    setSelected([...selected, id]);
  };

  useMemo(() => {
    if (selected.length === 2) {
      const [first, second] = selected;
      const firstCard = cards.find((card) => card.id === first);
      const secondCard = cards.find((card) => card.id === second);

      if (firstCard.emoji !== secondCard.emoji) {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>card.id == first || card.id == second ? { ...card, flipped: false }: card
            )
          );
        }, 1000);
      }
      setSelected([]);
    }
  }, [selected, cards]);

  return (
    <div className="game-container">
      <h2>Memory Card Game</h2>
      <div className="grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.flipped ? "flipped" : ""}`}
            onClick={() => !card.flipped && handleCardClick(card.id)}
          >
            {card.flipped ? card.emoji : "❓"}
          </div>
        ))}
      </div>
      <button onClick={() => setCards(shuffleCards())}>Restart</button>
    </div>
  );
}
