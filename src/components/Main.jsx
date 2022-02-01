import "../assets/styles/Main.css";

import Filter from "./Filter";
import ShowMoreBtn from "./ShowMoreBtn";
import TabBar from "./TabBar";
import Ticket from "./Ticket";

const Main = () => {
    return (
        <div className="wrapper">
            <div>
                <Filter /> 
            </div>        
            <div className="main">
                <TabBar />
                <Ticket />
                <ShowMoreBtn />
            </div>
        </div>
    )
}

export default Main;