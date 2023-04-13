import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="navbar">
                <h2>Movies Navigation</h2>
                <Link 
                to="/"
                >
                Home
                </Link>
                <Link
                to="/movieDisplay"
                >
                Movie Display
                </Link>
            </div>
        </header>
    )
}

export default Navbar;