import './styles/main.css';
import { useSelector } from 'react-redux';
import Menu from './components/Menu';
import Game from './components/Game';

function App() {
  const gamemode = useSelector((store) => store.gamemodes.gamemode);
  const gamemodeSelected = useSelector(store => store.gamemodes.gamemodeSelected)

  return (
    <div className="App">
      {gamemodeSelected ? <Game /> : <Menu />}
      <footer> Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Mathias Tarazona</a>.</footer>
    </div>
  );
}

export default App;
