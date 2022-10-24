import React from 'react';
import Hand from './Hand';
import { useSelector } from 'react-redux';

function InGame() {
  const userChoice = useSelector((store) => store.choices.userChoice);
  const computerChoice = useSelector((store) => store.choices.computerChoice);

  //Temporarily
  const gameResult = 'player';

  return (
    <div className="in-game-stage">
      <div className="single-choice">
        <Hand handType={userChoice} clickable={false} />
        <p>You Picked</p>
      </div>
      <div className="single-choice" id="computer-choice">
        <Hand handType={computerChoice} clickable={false} />
        <p>The House Picked</p>
      </div>
      <div className="result-container">
        <p>
          {gameResult === 'player'
            ? 'You Win'
            : gameResult === 'draw'
            ? 'Draw'
            : 'You Lose'}
        </p>
        <button>Play Again</button>
      </div>
    </div>
  );
}

export default InGame;
