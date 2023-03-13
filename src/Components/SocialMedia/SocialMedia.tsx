import "./SocialMedia.css";

import { FaTwitter, FaWaze,FaLinkedinIn, FaFacebook} from "react-icons/fa";

interface SocialMediaProps{
    facebook:boolean;
    twitter:boolean;
    waze:boolean;
    linkedin:boolean;

}
function SocialMedia(props:SocialMediaProps): JSX.Element {
    return (
        <div className="SocialMedia">
			<a href="https://twitter.com/clalithealth?lang=en">{props.twitter && <FaTwitter size={28}/>}</a>
            <a href="https://www.waze.com/live-map/">{props.waze && <FaWaze size={28}/>}</a>
            <a href="https://www.linkedin.com/home">{props.linkedin && <FaLinkedinIn size={28}/>}</a>
            {props.facebook && <FaFacebook size={28}/>}

       </div>
    );
 
 }

export default SocialMedia;
