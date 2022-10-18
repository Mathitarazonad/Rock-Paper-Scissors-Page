import React from 'react';

function Hand ({ handType, handleHandClick }) {
  <div className='single-hand' onClick={handleHandClick(handType)}>
    <img src={`../images/icon-${handType}.svg`} alt={handType} />
  </div>
}

export default Hand;