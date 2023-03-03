import "./Main2.css";
import Pic2 from "../../Assests/Images/pic3.png";
import School from "../School/School";
import Routing from "../Routing/Routing";
import { Outlet } from "react-router-dom";

function Main2(): JSX.Element {
  return (
    <div className="Main2">
      { <><School street={"Homa VeMigdal"} houseNumber={29} city={"Tel Aviv"} zip={6777129} phone={"*6444"} /></> 
                 }
      <Routing />
      <Outlet />
    </div>
  );
}

export default Main2;
