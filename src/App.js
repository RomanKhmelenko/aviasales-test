import { useEffect } from 'react';
import './App.css';
import { getTickets } from './api';

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
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
