import React from 'react';
import { setUserChoice } from '../store/choicesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setComputerChoice } from '../store/choicesSlice';

function Hand({ handType, clickable }) {
  const dispatch = useDispatch();
  const gamemode = useSelector(store => store.gamemodes.normalGamemode);
  
  function choiceHandler () {
    //Computer random choice code
    const buttons = ['rock', 'paper', 'scissors'];

    if(!gamemode) {
      buttons.push('lizard', 'spock')
    }

    const choice = buttons[Math.floor(Math.random()*buttons.length)];
    dispatch(setComputerChoice(choice));

    //Also set the choice state of the user
    dispatch(setUserChoice(handType));
  }

  if (clickable) {
    return (
      <div className="single-hand" id={handType} onClick={() => choiceHandler ()}>
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
