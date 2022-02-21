import '../../assets/styles/Ticket.css';
import logo from '../../assets/images/s7-logo.svg';

import TicketRoute from './TicketRoute';
import TicketFlightDuration from './TIcketFlightDuration';
import TicketStops from './TicketStops';

const Ticket = ({ticket}) => {

    return (
        <div className="ticket">
            <div className="ticket-header">
                <span className="ticket-price">{ticket.price} P</span>
                <img src={logo} alt="S7 Logo" />
            </div>
            <div className="ticket-details-row">
                <TicketRoute ticket={ticket} />
                <TicketFlightDuration ticket={ticket} />
                <TicketStops ticket={ticket} />
            </div>
            <div className="ticket-details-row">
                <TicketRoute ticket={ticket} />
                <TicketFlightDuration ticket={ticket} />
                <TicketStops ticket={ticket} />
            </div>
        </div>
    )
}

export default Ticket;