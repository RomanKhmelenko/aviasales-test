import { useEffect } from 'react';
import './App.css';
import Ticket from './components/Ticket';
import TabBar from './components/TabBar';
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
      <TabBar />
      <Ticket />
    </div>
  );
}

export default App;
