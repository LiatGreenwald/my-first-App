import { Route, Routes } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import Main2 from "../Main2/Main2";
import Page404 from "../Page404/Page404";
import School from "../School/School";
import Teacherlist from "../Teacherlist/Teacherlist";
import "./Routing.css";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="teacher" element={<Teacherlist/>} />
        <Route path="school" element={ <School    />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default Routing;
