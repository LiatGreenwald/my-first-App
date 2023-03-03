import "./SocialMedia.css";

import { FaTwitter, FaWaze,FaLinkedinIn} from "react-icons/fa";

function SocialMedia(): JSX.Element {
    return (
        <div className="SocialMedia">
			<FaTwitter size={28}/>
            <FaWaze size={28}/>
            <FaLinkedinIn size={28}/>

        </div>
    );
}

export default SocialMedia;
