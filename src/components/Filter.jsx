import "../assets/styles/Filter.css";
import Checkbox from "./Checkbox";

const Filter = () => {
    return (
        <div className="filter">
            <div className="filter-header">количество пересадок</div>
            <Checkbox checkboxName={"Все"} />
            <Checkbox checkboxName={"Без пересадок"}/>
            <Checkbox checkboxName={"1 пересадка"}/>
            <Checkbox checkboxName={"2 пересадки"}/>
            <Checkbox checkboxName={"3 пересадки"}/>
        </div>
    )
}

export default Filter;