import './assets/styles/App.css';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Main from './components/Main';
import Header from './components/Header';

import { fetchTickets } from './redux/actions';
import Tickets from './Tickets';

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
