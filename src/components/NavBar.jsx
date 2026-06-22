import { useState } from "react";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="font-montserrat px-5 py-5">
            <div className="flex items-center justify-between">
                <a
                    href="https://www.nu.nl/"
                    className="text-[1.4rem] font-semibold"
                >
                    Culture House
                </a>

                <button
                    type="button"
                    className="scale-x-140 text-2xl md:hidden"
                    aria-label="Menu"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                <ul className="hidden items-center gap-8 md:flex">
                    <li><a href="">Over ons</a></li>
                    <li><a href="">Studio</a></li>
                    <li><a href="">Diensten</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Podcast Studio</a></li>
                    <li><a href="">Op locatie</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>

            {isOpen && (
                <ul className="mt-6 flex flex-col gap-4 text-center md:hidden">
                    <li><a href="">Over ons</a></li>
                    <li><a href="">Studio</a></li>
                    <li><a href="">Diensten</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Podcast Studio</a></li>
                    <li><a href="">Op locatie</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            )}
        </nav>
    );
}

export default NavBar;