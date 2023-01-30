import './App.css';
import CounterFunction from '../counter/counter';
import { createStore } from 'redux';
import { reducer } from '../../store/reducers/index';

export const store = createStore(reducer);

function App() {
  return (
    <CounterFunction />
  );
}

export default App;
