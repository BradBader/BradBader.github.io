import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="hbox0">
                    <h2 id="llame">Brad Bader, Esq.</h2>
                    <div class="headerWrapper">
                            <ul>
                                <li><Link to="/portfolio">Projects</Link></li>
                                <li><Link to="/">About</Link></li>
                                {/* <li><a href="/contact">Contact</a></li> */}
                            </ul>
                    </div>
                </div>

            </div >
        )
    }
}

export default Header;