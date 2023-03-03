import Teacher from "../Teacher/Teacher";
import "./Teacherlist.css";

function Teacherlist(): JSX.Element {
    return (
       <div className="Teacherlist">
            <Teacher
                name={"Amit"}
                description={"c# & Typescript Expert"}
                years={20} />
            <Teacher name={"Kobi"}
                description={"React & Java Expert"}
                years={5} />
               
         </div> 
    );
}

export default Teacherlist;
