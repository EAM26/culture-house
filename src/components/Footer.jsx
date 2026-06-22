import React from 'react';
import FooterIcons from "./FooterIcons.jsx";

function Footer(props) {
    return (

        <footer
            className="font-montserrat text-center"
        >
            <div className="bg-gray-950 py-8" >
                <FooterIcons />
                <h5 className="text-2xl font-bold text-blue-900 pt-4">Culture House</h5>
                <p className="text-white py-3">Audio • Video • Podcast</p>
                <p className="text-white py-3">Studio en op locatie</p>
                <p className="text-white py-3">info@culturehouse.tv</p>
           </div>
            <h6 className="py-4 px-4">
                © 2026 Culture House. Alle rechten voorbehouden.
            </h6>
        </footer>
    );
}

export default Footer;