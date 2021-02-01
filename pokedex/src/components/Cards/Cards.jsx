import React, { useState, useEffect } from 'react';
import { getData } from '../../api';
import { Card } from '../Card/Card';
import './Cards.scss';

export const Cards = () => {
  const [ cardsAmount, setAmount ] = useState(12);
  const [ cards, setCards ] = useState([]);
 
  const getPokemons = async () => {
    const itemsFromServer = await getData(
      'https://pokeapi.co/api/v2/pokemon/?limit=',
      cardsAmount
    );

    setCards(itemsFromServer.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="Cards">
      <ul className="Cards__list">
        {cards.map((card, index) => (
          <Card
            url={card.url}
            name={card.name}
            index={index + 1}
            key={card.name}
          />
        ))}
      </ul>

      <button
        onClick={() => {
          setAmount(cardsAmount => cardsAmount + 12);
          getPokemons();
        }}
        className="Cards__more"
        type="button"
      >
        Show more
      </button>
    </div>
  )
}
