import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { setNormalGamemode, setBonusGamemode } from '../store/gamemodeSlice';

function Menu() {
  const dispatch = useDispatch();

  return (
    <div className="menu">
      <h1>Rock Paper or Scissors</h1>
      <h2>Frontend Mentor Challenge</h2>
      <h3>Choose your gamemode</h3>
      <button
        onClick={() => dispatch(setNormalGamemode())}
        className="gamemode-btns"
        id="normal-btn"
      >
        Normal
      </button>
      <button
        onClick={() => dispatch(setBonusGamemode())}
        className="gamemode-btns"
        id="bonus-btn"
      >
        Bonus
      </button>
    </div>
  );
}

export default Menu;
