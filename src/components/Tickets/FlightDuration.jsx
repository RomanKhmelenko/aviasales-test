import TicketDetails from "./TicketDetails"

import moment from "moment";

const FlightDuration = ({ticket}) => {
    
    const title = "в пути";

    const departureDateTime = `${ticket.departure_date} ${ticket.departure_time}`;
    const arrivalDateTime = `${ticket.arrival_date} ${ticket.arrival_time}`;

    const departure = moment(departureDateTime, "DD.MM.YY HH:mm");
    const arrival = moment(arrivalDateTime, "DD.MM.YY HH:mm");

    const duration = moment.duration(arrival.diff(departure));
    
    const hours = duration.get('hours');
    const minutes = duration.get('minutes');
    
    const flightDuration = `${hours}ч ${minutes}м`

    return (
        <TicketDetails firstRow={title} secondRow={flightDuration} />
    )
}

export default FlightDuration;