import React from 'react';
import normalRules from '../images/image-rules.svg';
import bonusRules from '../images/image-rules-bonus.svg';
import iconClose from '../images/icon-close.svg';
import { hideRules } from '../store/rulesSlice';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function RulesChart() {
  const dispatch = useDispatch();
  const isNormal = useSelector((store) => store.gamemodes.gamemode);

  return (
    <div className="rules-chart">
      <h2>RULES</h2>
      <img
        src={isNormal ? normalRules : bonusRules}
        alt="rules"
        className="rules-img"
      />
      <img
        src={iconClose}
        alt="close"
        className="close-icon"
        onClick={() => dispatch(hideRules())}
      />
    </div>
  );
}

export default RulesChart;
