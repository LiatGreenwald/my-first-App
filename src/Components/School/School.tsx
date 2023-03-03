import "./School.css";
import Pic2 from "../../Assests/Images/pic3.png";

function School(): JSX.Element {
  return (
    <div className="School">
      <p>
     Homa VeMigdal 29 <br />
        Tel Aviv 6777129
        <br />
        *6444
        <br />
        <img src={Pic2} />
       
      </p>
    </div>
  );
}

export default School;
