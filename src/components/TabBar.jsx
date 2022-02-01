import '../assets/styles/TabBar.css';
import Tab from './Tab';

const TabBar = () => {
    return (
        <div className="tabBar">
            <Tab textContent={"самый дешевый"}/>
            <Tab textContent={"самый быстрый"}/>
            <Tab textContent={"оптимальный"}/>
        </div>
    )
}

export default TabBar;