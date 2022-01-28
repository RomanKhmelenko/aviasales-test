import tickets from './tickets.json';

export const getTickets = () => new Promise((res) => {
  setTimeout(() => res(tickets), 1000)
});