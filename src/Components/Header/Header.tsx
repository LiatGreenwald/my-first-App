import "./Header.css";
import { BsFacebook } from "react-icons/bs";

function Header(): JSX.Element {
    return (
        <div className="Header">
                <BsFacebook size={36}/>        
                <h1>Full Stack Clalit</h1>
                <img src="https://www.clalit.co.il/he/PublishingImages/SiteLogo/logo-clalit-newsite.svg?v=17.5" alt="clalit logo"/>
           
        </div>
    );
}

export default Header;
