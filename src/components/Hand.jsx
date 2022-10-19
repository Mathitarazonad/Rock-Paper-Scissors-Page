import React from 'react';

function Hand({ handType }) {
  return (
    <div className="single-hand" id={handType}>
      <img src={require(`../images/icon-${handType}.svg`)} alt={handType} />
    </div>
  );
}

export default Hand;
