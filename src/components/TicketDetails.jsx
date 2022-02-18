import '../assets/styles/TicketDetails.css';

const TicketDetails = ({firstRow,secondRow}) => {
    return (
        <div>
            <div className="first-row">{firstRow}</div>
            <div className="second-row">{secondRow}</div>
        </div>
    )
}

export default TicketDetails;