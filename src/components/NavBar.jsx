import {useState} from "react";
import {Link} from "react-router";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="font-montserrat px-5 py-5">
            <div className="flex items-center justify-between">
                <Link
                    to="/"
                    className="text-[1.4rem] font-semibold"
                >
                    Culture House
                </Link>

                <button
                    type="button"
                    className="scale-x-140 text-2xl md:hidden"
                    aria-label="Menu"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                <ul className="hidden items-center gap-8 md:flex">
                    <li><Link to="/about">Over ons</Link></li>
                    <li><Link to="studio">Studio</Link></li>
                    <li><Link to="/services">Diensten</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/podcast-studio">Podcast Studio</Link></li>
                    <li><Link to="/location">Op Location</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            {isOpen && (
                <ul className="mt-6 flex flex-col gap-4 text-center md:hidden">
                    <li><Link to="/about">Over ons</Link></li>
                    <li><Link to="studio">Studio</Link></li>
                    <li><Link to="/services">Diensten</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/podcast-studio">Podcast Studio</Link></li>
                    <li><Link to="/location">Op Location</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            )}
        </nav>
    );
}

export default NavBar;