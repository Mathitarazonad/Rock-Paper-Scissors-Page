import React, { useEffect } from 'react';
import Hand from './Hand';
import { useSelector, useDispatch } from 'react-redux';
import { setComputerChoice } from '../store/choicesSlice';

function InGame () {
  const userChoice = useSelector(store => store.choices.userChoice);
  const computerChoice = useSelector(store => store.choices.computerChoice);

  return(
    <div className='in-game-stage'>
      <div className='choices-container'>
        <div className="single-choice">
          <Hand handType={userChoice} clickable={false}/>
          <p>You Picked</p>
        </div>
        <div className="single-choice">
          <Hand handType={computerChoice} clickable={false}/>
          <p>The House Picked</p>
        </div>
      </div>
    </div>
  );
}

export default InGame;
