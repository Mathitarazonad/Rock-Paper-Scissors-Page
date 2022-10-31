import React from 'react';
import { useDispatch } from 'react-redux';
import { setComputerChoice, setUserChoice } from '../store/choicesSlice';
import { resetGamemode } from '../store/gamemodeSlice';

function BackBtn() {
  const handleClick = () => {
    dispatch(resetGamemode());
    dispatch(setUserChoice(''));
    dispatch(setComputerChoice(''));
  };

  const dispatch = useDispatch();

  return (
    <button className='go-menu-btn' onClick={() => handleClick()}>Menu</button>
  );
}

export default BackBtn;
