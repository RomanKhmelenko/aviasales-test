import TicketDetails from "./TicketDetails"

const FlightRoute = ({ticket}) => {
    
    const flight = `${ticket.origin} - ${ticket.destination}`;

    const departureTime = ticket.departure_time
    const arrivalTime = ticket.arrival_time

    const flightDepArrTimes = `${departureTime} - ${arrivalTime}`;


    return (
        <TicketDetails firstRow={flight} secondRow={flightDepArrTimes} />
    )
}

export default FlightRoute;