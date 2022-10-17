import React from 'react';
import RulesChart from './RulesChart';
import Scoreboard from './Scoreboard';
import { useSelector, useDispatch } from 'react-redux';
import { displayRules } from '../store/rulesSlice';

function Game() {
  const dispatch = useDispatch();
  const showRules = useSelector((store) => store.rules.showRules);
  const gamemode = useSelector((store) => store.gamemodes.gamemode);

  return (
    <main>
      <div className="main-container">
        <Scoreboard />
        {showRules ? (
          <RulesChart />
        ) : (
          <button
            className="show-rules-btn"
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
