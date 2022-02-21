import '../../assets/styles/Ticket.css';
import logo from '../../assets/images/s7-logo.svg';

import FlightDuration from './FlightDuration';
import FlightStops from './FlightStops';
import FlightRoute from './FlightRoute';

const Ticket = ({ticket}) => {

    return (
        <div className="ticket">
            <div className="ticket-header">
                <span className="ticket-price">{ticket.price} P</span>
                <img src={logo} alt="S7 Logo" />
            </div>
            <div className="ticket-details-row">
                <FlightRoute ticket={ticket} />
                <FlightDuration ticket={ticket} />
                <FlightStops ticket={ticket} />
            </div>
            <div className="ticket-details-row">
                <FlightRoute ticket={ticket} />
                <FlightDuration ticket={ticket} />
                <FlightStops ticket={ticket} />
            </div>
        </div>
    )
}

export default Ticket;