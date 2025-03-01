import React, { useMemo, useState } from "react";
import "../assets/memorygame.css";

export const MemoryGame2 = () => {
  const cardImages = ["🍎", "🍌", "🍒", "🍇", "🍉", "🥝", "🍍", "🍓"];

  const shuffleCard = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((item, index) => {
        return {
          id: index,
          emoji: item,
          flipped: false,
        };
      });
    return shuffled;
  };

  const [cards, setCards] = useState(() => shuffleCard());
  const [selected, setSelected] = useState([]);

  const handleClick = (id)=>{
    if(selected.length ==2) return;
    const updateCards = cards.map((card)=>{
        return card.id == id ? {...card,flipped:true} :card
    })
    setCards(updateCards)
    setSelected([...selected,id])
  }
  useMemo(()=>{
    if(selected.length==2){
        const [first,second] = selected
        const firstCard = cards.find((card)=>card.id == first)
        const secondCard = cards.find((card)=>card.id == second)

        if (firstCard.emoji !== secondCard.emoji) {
            setTimeout(() => {
              setCards((prevCards) =>
                prevCards.map((card) =>card.id == first || card.id == second ? { ...card, flipped: false }: card
                )
              );
            }, 1000);
          }
          
        setSelected([])
    }
  },[selected,cards])

  return (
    <div style={{ textAlign: "center" }}>
      <h1>game 2</h1>
      <div className="game-container">
        <h1>MEMORY CARD GAME</h1>
        <div className="grid">
          {cards.map((card) => {
            return (
              <div
                className={`card ${card.flipped ? "flipped" : ""}`}
                onClick={() => !card.flipped && handleClick(card.id)}
              >
                {card.flipped ? card.emoji :"❔"}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
