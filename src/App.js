import './assets/styles/App.css';

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

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
