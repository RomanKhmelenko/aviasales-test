import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Ticket from "./Ticket";
import { fetchTickets } from "../../redux/actions";

const Tickets = ({ticketsQuantity}) => {

    const dispatch = useDispatch()
    const allTickets = useSelector((state) => state.tickets);

    useEffect(() => {
        dispatch(fetchTickets())
      }, [dispatch]);
    
    const ticketsToShow = allTickets.slice(0, ticketsQuantity);

    return (
        <div>
            <div>
                {ticketsToShow.map((ticket) => {
                        return <Ticket ticket={ticket} key={ticket.price} />
                })}
            </div>
        </div>
    )
}

export default Tickets;