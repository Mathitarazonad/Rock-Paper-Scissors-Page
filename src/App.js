import RulesChart from './components/RulesChart';
import Scoreboard from './components/Scoreboard';
import './styles/main.css';

function App() {

  //For the moment it is not a state:
  let showRules = false;

  return (
    <div className="App">
      <main>
        <div className='main-container'>
        <Scoreboard />

        {showRules ? <RulesChart /> : <button className='show-rules-btn'>RULES</button>}
        </div>
      </main>
    </div>
  );
}

export default App;
