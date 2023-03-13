import "./Footer.css";
import { CiSettings } from "react-icons/ci";
import SocialMedia from "../SocialMedia/SocialMedia";

function Footer(): JSX.Element {
    const year = new Date().getFullYear();
    return (
        <div className="Footer">
			<h4>All rights reserved to Liat Greenwald {year}&copy;</h4>
           < CiSettings size={28}/>
           <SocialMedia facebook={false} twitter={true} waze={true} linkedin={true}/>

        </div>
    );
}

export default Footer;
