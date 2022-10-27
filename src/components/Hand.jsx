import React from 'react';
import { setUserChoice } from '../store/choicesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setComputerChoice } from '../store/choicesSlice';

function Hand({ handType, clickable }) {
  const dispatch = useDispatch();
  const gamemode = useSelector((store) => store.gamemodes.normalGamemode);

  function choiceHandler() {
    //Computer random choice code
    const buttons = ['rock', 'paper', 'scissors'];

    if (!gamemode) {
      buttons.push('lizard', 'spock');
    }

    const choice = buttons[getRandom()];
    dispatch(setComputerChoice(choice));

    //Also set the choice state of the user
    dispatch(setUserChoice(handType));
  }

  function getRandom() {
    const buttons = ['rock', 'paper', 'scissors'];

    if (!gamemode) {
      buttons.push('lizard', 'spock');
    }

    return Math.floor(Math.random() * buttons.length);
  }

  if (clickable) {
    return (
      <div
        className="single-hand"
        id={handType}
        onClick={() => choiceHandler()}
      >
        <img src={require(`../images/icon-${handType}.svg`)} alt={handType} />
      </div>
    );
  } else {
    return (
      <div className="single-hand" id={handType}>
        <img src={require(`../images/icon-${handType}.svg`)} alt={handType} />
      </div>
    );
  }
}

export default Hand;
