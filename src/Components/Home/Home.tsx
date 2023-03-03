import "./Home.css";
import Pic2 from "../../Assests/Images/pic3.png";

function Home(): JSX.Element {
    return (
        <div className="Home">
			 { <><h2>Programming Courses</h2>
             <img src={Pic2} /></> }

        </div>
    );
}

export default Home;
