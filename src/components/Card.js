import React from 'react';

import './Card.scss';

function Card({card}) {
  return (
    <div className="Card">
      <figure className="Card__poster">
        <img src={require(`../Slices/${card['poster-image']}`)} alt={card.name} />
      </figure>
      <h3 className="Card__headline">{card.name}</h3>
    </div>
  );
}

export default Card;
