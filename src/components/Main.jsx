import "../assets/styles/Main.css";
import Tickets from "../Tickets";

import Filter from "./Filter";
import ShowMoreBtn from "./ShowMoreBtn";
import TabBar from "./TabBar";

const Main = () => {
    return (
        <div className="wrapper">
            <div>
                <Filter /> 
            </div>        
            <div className="main">
                <TabBar />
                <Tickets />
                <ShowMoreBtn />
            </div>
        </div>
    )
}

export default Main;