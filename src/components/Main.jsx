import "../assets/styles/Main.css";

import Tickets from "./Tickets/Tickets";
import Filter from "./Filter";
import ShowMoreBtn from "./ShowMoreBtn";
import TabBar from "./TabBar";

import { useState } from "react";

const Main = () => {

    const [ticketsQuantity, setTicketsQuantity] = useState(5);

    const showMore = () => {
        if (ticketsQuantity === 5) {
            setTicketsQuantity(10);
        } else {
            setTicketsQuantity(5)
        }    
    };

    return (
        <div className="wrapper">
            <div>
                <Filter /> 
            </div>        
            <div className="main">
                <TabBar />
                <Tickets ticketsQuantity={ticketsQuantity}/>
                <ShowMoreBtn showMore={showMore} />
            </div>
        </div>
    )
}

export default Main;