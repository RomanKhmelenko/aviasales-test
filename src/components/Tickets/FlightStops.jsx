import TicketDetails from "./TicketDetails"

const FlightStops = ({ticket}) => {
    
    const stopsFunc = (arg) => {
        if (arg === 0) {
            return ("без пересадок");
        } else if (arg === 1) {
            return (`${arg} пересадка`);
        } else {
            return (`${arg} пересадки`);
        }
    };

    const stops = stopsFunc(ticket.stops)

    // FILLER FOR STOPS AIRPORTS

    const stopsPortFunc = (arg) => {
        if (arg === 0) {
            return "N/A";
        } else if (arg === 1) {
            return "ABC";
        } else if (arg === 2) {
            return "DEF, GHJ";
        } else {
            return "KLM, NOP, QRS"
        }
    };

    const stopsPort = stopsPortFunc(ticket.stops);


    return (
        <TicketDetails firstRow={stops} secondRow={stopsPort} />
    )
}

export default FlightStops;