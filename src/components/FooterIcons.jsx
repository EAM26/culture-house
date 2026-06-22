import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function FooterIcons() {
    return (
        <div className="flex items-center justify-center gap-4 bg-gray-950 text-white">
            <FaFacebookSquare className="h-5 w-5" />
            <FaInstagram className="h-5 w-5" />
            <MdOutlineMail className="h-5 w-5" />
        </div>
    );
}

export default FooterIcons;