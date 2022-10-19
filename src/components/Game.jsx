import React from 'react';
import RulesChart from './RulesChart';
import Scoreboard from './Scoreboard';
import { useSelector, useDispatch } from 'react-redux';
import { displayRules } from '../store/rulesSlice';
import Hand from './Hand';

function Game() {
  const dispatch = useDispatch();
  const showRules = useSelector((store) => store.rules.showRules);
  const isNormalGame = useSelector((store) => store.gamemodes.normalGamemode);
  const normalBtns = ['paper', 'scissors', 'rock'];
  const bonusBtns = ['scissors', 'paper', 'rock', 'lizard', 'spock'];

  return (
    <main>
      <div className='main-container'>
        <Scoreboard />

        <div
          className={isNormalGame ? 'hands-container' : 'hands-container bonus'}
        >
          {isNormalGame ? (
            <img
              src={require('../images/bg-triangle.svg').default}
              className='hands-bg'
              alt='hands-bg'
            />
          ) : (
            <img
              src={require('../images/bg-pentagon.svg').default}
              className='hands-bg'
              alt='hands-bg'
            />
          )}
          {isNormalGame
            ? normalBtns.map((btn) => <Hand handType={btn} key={btn} />)
            : bonusBtns.map((btn) => <Hand handType={btn} key={btn} />)}
        </div>

        {showRules ? (
          <RulesChart />
        ) : (
          <button
            className='show-rules-btn'
            onClick={() => dispatch(displayRules())}
          >
            RULES
          </button>
        )}
      </div>
    </main>
  );
}

export default Game;
