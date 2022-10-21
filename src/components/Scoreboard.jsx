import React from 'react';
import normalLogo from '../images/logo.svg';
import bonusLogo from '../images/logo-bonus.svg';
import { useSelector } from 'react-redux/es/exports';

function Scoreboard () {
  
  let isNormal = useSelector(store => store.gamemodes.normalGamemode);

  return (
    <div className='scoreboard'>
      <img src={isNormal ? normalLogo : bonusLogo} alt='logo' />
      <div className='scoreboard-counter'>
        <h2>Score</h2>
        <p>0</p>
      </div>
    </div>
  )
  
}

export default Scoreboard;