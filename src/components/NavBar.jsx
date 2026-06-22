import React from 'react';

function NavBar(props) {
    return (
        <nav className="font-montserrat flex justify-between  py-5 px-5">
            <div className="text-[1.4rem] font-semibold"><a href="https://www.nu.nl/">Culture House</a></div>

            <button className="scale-x-140" aria-label="Menu">
                ☰
            </button>
            {/*<ul hidden md:px-8>*/}
            {/*    <li><a href="">Over ons</a></li>*/}
            {/*    <li><a href="">Studio</a></li>*/}
            {/*    <li><a href="">Diensten</a></li>*/}
            {/*    <li><a href="">Portfolio</a></li>*/}
            {/*    <li><a href="">Podcast Studio</a></li>*/}
            {/*    <li><a href="">Op locatie</a></li>*/}
            {/*    <li><a href="">Contact</a></li>*/}
            {/*</ul>*/}
        </nav>
    );
}

export default NavBar;