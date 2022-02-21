import '../assets/styles/Ticket.css';
import logo from '../assets/images/s7-logo.svg';

import TicketDetails from './TicketDetails'
import moment from 'moment';

const Ticket = (ticketObj) => {

    const ticket = ticketObj.ticket;

    // ROUTE

    const flight = ticket.origin + " - " + ticket.destination;

    const departureTime = ticket.departure_time
    const arrivalTime = ticket.arrival_time

    const flightDepArrTimes = departureTime + " - " + arrivalTime;
    
    // FLIGHT DURATION

    const inTheAir = "в пути";

    const departureDateTime = `${ticket.departure_date} ${ticket.departure_time}`;
    const arrivalDateTime = `${ticket.arrival_date} ${ticket.arrival_time}`;

    const departure = moment(departureDateTime, "DD.MM.YY HH:mm");
    const arrival = moment(arrivalDateTime, "DD.MM.YY HH:mm");

    const duration = moment.duration(arrival.diff(departure));
    
    const hours = duration.get('hours');
    const minutes = duration.get('minutes');
    
    const flightDuration = `${hours}ч ${minutes}м`
    
    // STOPS 

    const stopsFunc = (arg) => {
        if (arg === 0) {
            return ("без пересадок");
        } else if (arg === 1) {
            return (arg + " пересадка");
        } else {
            return (arg + " пересадки");
        }
    };

    const stops = stopsFunc(ticket.stops)

    // FILLER FOR STOPS AIRPORTS

    const stopsPortFunc = (arg) => {
        if (arg === 0) {
            return ("N/A");
        } else if (arg === 1) {
            return ("ABC");
        } else if (arg === 2) {
            return ("DEF, GHJ");
        } else {
            return ("KLM, NOP, QRS")
        }
    };

    const stopsPort = stopsPortFunc(ticket.stops);

    return (
        <div className="ticket">
            <div className="ticket-header">
                <span className="ticket-price">{ticket.price} P</span>
                <img src={logo} alt="S7 Logo" />
            </div>
            <div className="ticket-details-row">
                <TicketDetails firstRow={flight} secondRow={flightDepArrTimes}/>
                <TicketDetails firstRow={inTheAir} secondRow={flightDuration}/>
                <TicketDetails firstRow={stops} secondRow={stopsPort}/>
            </div>
            <div className="ticket-details-row">
                <TicketDetails firstRow={flight} secondRow={flightDepArrTimes}/>
                <TicketDetails firstRow={inTheAir} secondRow={flightDuration}/>
                <TicketDetails firstRow={stops} secondRow={stopsPort}/>
            </div>
        </div>
    )
}

export default Ticket;