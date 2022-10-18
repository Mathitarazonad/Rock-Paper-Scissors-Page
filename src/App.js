import './styles/main.css';
import { useSelector } from 'react-redux';
import Menu from './components/Menu';
import Game from './components/Game';

function App() {
  const gamemodeIsSelected = useSelector(store => store.gamemodes.gamemodeSelected)

  return (
    <div className="App">
      {gamemodeIsSelected ? <Game /> : <Menu />}
      <footer> Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io/profile/Mathitarazonad" target='_blank'>Mathias Tarazona</a>.</footer>
    </div>
  );
}

export default App;
