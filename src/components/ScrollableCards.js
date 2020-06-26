import React from 'react';
import Card from './Card';

import './ScrollableCards.scss';

function ScrollableCards({cards}) {
  return (
    <div className="ScrollableCards">
      {
        cards && cards.content && cards.content.map((card, index) => <Card key={index} card={card} />)
      }
    </div>
  );
}

export default ScrollableCards;
