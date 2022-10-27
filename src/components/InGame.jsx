import React from 'react';
import Hand from './Hand';
import { useSelector, useDispatch } from 'react-redux';
import { setGameResult } from '../store/resultsSlice';
import { setComputerChoice, setUserChoice } from '../store/choicesSlice';

function InGame() {
  const userChoice = useSelector((store) => store.choices.userChoice);
  const computerChoice = useSelector((store) => store.choices.computerChoice);
  const gameResult = useSelector((store) => store.results.gameResult);
  const dispatch = useDispatch();

  evaluateResults(userChoice, computerChoice);

  function evaluateResults(userChoice, computerChoice) {
    const choices = [
      {
        gameName: 'player',
        choice: userChoice,
      },
      {
        gameName: 'computer',
        choice: computerChoice,
      },
    ];

    const getPlayerWithChoice = (choice) => {
      const winner = choices.filter((user) => user.choice === choice);
      return winner[0].gameName;
    };

    //Normal results
    if (userChoice === computerChoice) {
      dispatch(setGameResult('draw'));
    } else if (
      (userChoice === 'rock' || computerChoice === 'rock') &&
      (userChoice === 'scissors' || computerChoice === 'scissors')
    ) {
      dispatch(setGameResult(getPlayerWithChoice('rock')));
    } else if (
      (userChoice === 'rock' || computerChoice === 'rock') &&
      (userChoice === 'paper' || computerChoice === 'paper')
    ) {
      dispatch(setGameResult(getPlayerWithChoice('paper')));
    } else if (
      (userChoice === 'paper' || computerChoice === 'paper') &&
      (userChoice === 'scissors' || computerChoice === 'scissors')
    ) {
      dispatch(setGameResult(getPlayerWithChoice('scissors')));
    } else if (
      (userChoice === 'rock' || computerChoice === 'rock') &&
      (userChoice === 'scissors' || computerChoice === 'scissors')
    ) {
      dispatch(setGameResult(getPlayerWithChoice('rock')));

      //Bonus Possible results
    } else if (
      (userChoice === 'rock' || computerChoice === 'rock') &&
      (userChoice === 'lizard' || computerChoice === 'lizard')
    ) {
      dispatch(setGameResult(getPlayerWithChoice('rock')));
    } else if (
      (userChoice === 'lizard' || computerChoice === 'lizard') &&
      (userChoice === 'spock' || computerChoice === 'spock')
    ) {
      dispatch(setGameResult(getPlayerWithChoice('lizard')));
    } else if (
      (userChoice === 'spock' || computerChoice === 'spock') &&
      (userChoice === 'scissors' || computerChoice === 'scissors')
    ) {
      dispatch(setGameResult(getPlayerWithChoice('spock')));
    } else if (
      (userChoice === 'scissors' || computerChoice === 'scissors') &&
      (userChoice === 'lizard' || computerChoice === 'lizard')
    ) {
      dispatch(setGameResult(getPlayerWithChoice('scissors')));
    } else if (
      (userChoice === 'paper' || computerChoice === 'paper') &&
      (userChoice === 'spock' || computerChoice === 'spock')
    ) {
      dispatch(setGameResult(getPlayerWithChoice('paper')));
    } else if (
      (userChoice === 'lizard' || computerChoice === 'lizard') &&
      (userChoice === 'paper' || computerChoice === 'paper')
    ) {
      dispatch(setGameResult(getPlayerWithChoice('lizard')));
    } else if (
      (userChoice === 'spock' || computerChoice === 'spock') &&
      (userChoice === 'rock' || computerChoice === 'rock')
    ) {
      dispatch(setGameResult(getPlayerWithChoice('spock')));
    }
  }

  function handleReset() {
    dispatch(setUserChoice(''));
    dispatch(setComputerChoice(''));
    dispatch(setGameResult(''));
  }

  return (
    <div className="in-game-stage">
      <div
        className={
          gameResult === 'player' ? 'single-choice winner' : 'single-choice'
        }
        id="user-choice"
      >
        <Hand handType={userChoice} clickable={false} />
        <p>You Picked</p>
      </div>
      <div
        className={
          gameResult === 'computer' ? 'single-choice winner' : 'single-choice'
        }
        id="computer-choice"
      >
        <Hand handType={computerChoice} clickable={false} />
        <p>The House Picked</p>
      </div>
      {gameResult !== '' && (
        <div className="result-container">
          <p>
            {gameResult === 'player'
              ? 'You Win'
              : gameResult === 'draw'
              ? 'Draw'
              : 'You Lose'}
          </p>
          <button onClick={() => handleReset()}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default InGame;
