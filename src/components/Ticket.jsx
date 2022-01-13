import './Ticket.css';

import TicketDetails from './TicketDetails';

const Ticket = () => {
  return (
    <div className="ticket">
      <div className="ticket-header">
        <span className="ticket-price">13400 P</span>
        <span>S7 Airlines</span>
      </div>
      <div className="ticket-details-row">
        <TicketDetails />
        <TicketDetails />
        <TicketDetails />
      </div>
      <div className="ticket-details-row">
        <TicketDetails />
        <TicketDetails />
        <TicketDetails />
      </div>
    </div>
  )
};

export default Ticket;
