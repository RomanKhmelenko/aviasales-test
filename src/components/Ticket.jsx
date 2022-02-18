import '../assets/styles/Ticket.css';
import logo from '../assets/images/s7-logo.svg';

import TicketDetails from './TicketDetails'

const Ticket = (ticketObj) => {

    const ticket = ticketObj.ticket;

    // ROUTE

    const flight = ticket.origin + " - " + ticket.destination;

    const departureTime = ticket.departure_time
    const arrivalTime = ticket.arrival_time

    const flightDepArrTimes = departureTime + " - " + arrivalTime;
    
    // IN THE AIR

    const inTheAir = "в пути";

    const departureDate = ticket.departure_date;
    const arrivalDate = ticket.arrival_date;

    console.log(departureTime);

    // const testDate = Date.parse(departureTime);

    // console.log(testDate);
    
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

    // FILLER FOR STOPS AIRPORTS >>> START <<<

    const stopsPortFunc = (arg) => {
        if (arg === 0) {
            return ("n/a");
        } else if (arg === 1) {
            return ("abc");
        } else if (arg === 2) {
            return ("def, ghj");
        } else {
            return ("klm, nop, qrs")
        }
    };

    const stopsPort = stopsPortFunc(ticket.stops);

    // FILLER FOR STOPS AIRPORTS >>> END <<<


    return (
        <div className="ticket">
            <div className="ticket-header">
                <span className="ticket-price">{ticket.price} P</span>
                <img src={logo} alt="S7 Logo" />
            </div>
            <div className="ticket-details-row">
                <TicketDetails firstRow={flight} secondRow={flightDepArrTimes}/>
                <TicketDetails firstRow={inTheAir} secondRow={flightDepArrTimes}/>
                <TicketDetails firstRow={stops} secondRow={stopsPort}/>
            </div>
            <div className="ticket-details-row">
                <TicketDetails firstRow={flight} secondRow={flightDepArrTimes}/>
                <TicketDetails firstRow={inTheAir} secondRow={flightDepArrTimes}/>
                <TicketDetails firstRow={stops} secondRow={stopsPort}/>
            </div>
        </div>
    )
}

export default Ticket;