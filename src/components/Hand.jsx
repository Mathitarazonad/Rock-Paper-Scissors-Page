import React from 'react';
import { setUserChoice } from '../store/choicesSlice';
import { useDispatch } from 'react-redux';

function Hand({ handType }) {
  const dispatch = useDispatch();

  return (
    <div
      className="single-hand"
      id={handType}
      onClick={() => dispatch(setUserChoice(handType))}
    >
      <img src={require(`../images/icon-${handType}.svg`)} alt={handType} />
    </div>
  );
}

export default Hand;
