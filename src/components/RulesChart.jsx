import React from 'react'; 
import normalRules from '../images/image-rules.svg'
import bonusRules from '../images/image-rules-bonus.svg'
import iconClose from '../images/icon-close.svg'

function RulesChart () {
  //This is only for now, then will be a state
  let isNormal = false;

  return(
    <div className='rules-chart'>
      <h2>RULES</h2>
      <img src={ isNormal ? normalRules : bonusRules } alt='rules' className='rules-img'/>
      <img src={ iconClose } alt='close' className='close-icon'/>
    </div>
  );
}

export default RulesChart;