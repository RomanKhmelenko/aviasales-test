import './assets/styles/App.css';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Main from './components/Main';
import Header from './components/Header';

import { fetchTickets } from './redux/actions';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    
    dispatch(fetchTickets())

  }, [dispatch]);

  const state = useSelector((state) => state.tickets);
  console.log(state);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
