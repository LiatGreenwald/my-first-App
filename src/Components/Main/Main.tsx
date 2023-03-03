import "./Main.css";
import Pic2 from "../../Assests/Images/pic3.png";
import Teacher from "../Teacher/Teacher";
import School from "../School/School";
import { Link } from "react-router-dom";

function Main(): JSX.Element {
  return (

    <div className="Main">
        <a href="home">Home</a>
        <a href="cats">Cats</a>
        <a href="dogs">dogs</a>
{/* 
      <h2>Programming Courses</h2>
      <h4>Tuesday 9:00-16:30</h4>
      <h4>Friday 9:00-13:15</h4>

      <Link to="home">Home</Link>
            <Link to="teacher">Teacher</Link>
           
      <School
        street={"Homa VeMigdal"}
        houseNumber={29}
        city={"Tel Aviv"}
        zip={6777129}
        phone={"*6444"}
        src={Pic2}
      />
      <h2>Teachers</h2>
      <Teacher
        name={"Amit"}
        description={"c# & Typescript Expert"}
        years={20}
      />
      <Teacher name={"Kobi"} description={"React & Java Expert"} years={5} /> */}
    </div>
  );
}

export default Main;
