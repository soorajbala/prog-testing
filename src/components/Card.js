import React from 'react';

import './Card.scss';

function Card({card}) {
  return (
    <div className="Card">
      <img className="Card__poster" src={require(`../Slices/${card['poster-image']}`)} alt={card.name} />
      <h3 className="Card__headline">{card.name}</h3>
    </div>
  );
}

export default Card;
