import { getTickets } from "../api";

export const fetchTickets = () => {
    return async dispatch => {
        const tickets = await getTickets();
        dispatch({type: "ADD_ALL_TICKETS", payload: tickets})
  }
}