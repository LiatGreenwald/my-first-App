import "./Footer.css";
import { CiSettings } from "react-icons/ci";
import SocialMedia from "../SocialMedia/SocialMedia";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
			<h4>All rights reserved to John Bryce &copy;</h4>
           < CiSettings size={28}/>
           <SocialMedia/>
        </div>
    );
}

export default Footer;
