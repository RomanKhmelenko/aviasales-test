import '../assets/styles/Ticket.css';
import logo from '../assets/images/s7-logo.svg';

import TicketDetails from './TicketDetails'

const Ticket = (ticket) => {
    console.log(ticket);
    
    return (
        <div className="ticket">
            <div className="ticket-header">
                <span className="ticket-price">{ticket.price}</span>
                <img src={logo} alt="S7 Logo" />
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
}

export default Ticket;