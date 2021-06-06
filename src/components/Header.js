import React from 'react'
import {Link} from 'react-router-dom';
import { FiPlusCircle } from "react-icons/fi";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">Watchlist</Link>
                    </div>

                    <ul className="nav-links">
                        <li><Link to="/">Watchlist</Link></li>
                        <li><Link to="/watched">Watched</Link></li>
                        <li><Link to="/add" className="btn"> <FiPlusCircle/> Add</Link></li>
                        
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
