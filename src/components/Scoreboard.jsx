import React from 'react';
import normalLogo from '../images/logo.svg';
import bonusLogo from '../images/logo-bonus.svg';

function Scoreboard () {
  
  let isNormal = true;

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