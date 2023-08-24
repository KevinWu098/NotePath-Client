import { Link, NavLink } from "react-router-dom";
import logo from "../assets/note.png";

const Header = () => {
    return (
        <header>
            <Link to="/" className="logo">
                <img
                    src={logo}
                    alt="ReactJS"
                    style={{
                        maxHeight: "2rem",
                        alignItems: "center",
                    }}
                />
                NotePath
            </Link>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </header>
    );
};

export default Header;
