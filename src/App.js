import './styles/main.css';
import { useSelector } from 'react-redux';
import Menu from './components/Menu';
import Game from './components/Game';

function App() {
  const gamemode = useSelector((store) => store.gamemodes.gamemode);

  return (
    <div className="App">
      {gamemode == undefined ? <Menu /> : <Game />}
    </div>
  );
}

export default App;
