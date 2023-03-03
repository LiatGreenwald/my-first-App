import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <h2>Programming Courses</h2>
            <h4>Tuesday 9:00-16:30</h4>
            <h4>Friday 9:00-13:15</h4>
			<Link to="home">Home</Link>
            <br/>
        <Link to="teacher">Teachers</Link>
        <br/>
        <Link to="school">John Bryce</Link>
        </div>
    );
}

export default Menu;
