import RulesChart from './components/RulesChart';
import Scoreboard from './components/Scoreboard';
import './styles/main.css';
import { useSelector, useDispatch } from 'react-redux';
import { displayRules } from './store/rulesSlice';

function App() {
  const showRules = useSelector((store) => store.rules.showRules);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <main>
        <div className='main-container'>
          <Scoreboard />
          {showRules ? (
            <RulesChart />
          ) : (
            <button className='show-rules-btn' onClick={() => dispatch(displayRules())}>
              RULES
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
