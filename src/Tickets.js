import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Ticket from "./components/Ticket";
import { fetchTickets } from "./redux/actions";

const Tickets = () => {
    const dispatch = useDispatch()
    const tickets = useSelector((state) => state.tickets);
    console.log(tickets);

    useEffect(() => {

        dispatch(fetchTickets())

      }, [dispatch]);

    return (
        <div>
            <div>
                {tickets.map(ticket => 
                    <Ticket ticket={ticket} key={ticket.price} />
                )}
            </div>
        </div>
    )   
}

export default Tickets;