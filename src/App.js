import './assets/styles/App.css';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTickets } from './api';

import Main from './components/Main';
import Header from './components/Header';

function App() {
  useEffect(() => {
    const getTicketsFetcher = async () => {
      const tickets = await getTickets();
      console.log(tickets);
    };

    getTicketsFetcher();
  }, []);

  const state = useSelector((state) => state);

  console.log(state);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
