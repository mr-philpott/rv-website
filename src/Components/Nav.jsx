import { useState } from "react"

const Nav = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <nav>
                <div className="nav-branding">
                    <div className="logo">
                    </div>
                    <div className="company-name">RV / AC Inspection and Repair</div>
                </div>
                <ul className="links">
                    <li>
                        <a href="#services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#gallery">
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a href="#review">
                            Review
                        </a>
                    </li>
                    <li>
                        <a href="#gallery">
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="nav-toggle">
                    <div className={dropdown ? "cross" : "hamburger"} onClick={() => setDropdown(!dropdown)}>
                        <div className="slice"></div>
                        <div className="slice"></div>
                        <div className="slice"></div>
                    </div>
                </div>
            </nav>
            <div className={`nav-dropdown ${dropdown ? "show" : "hide"}`}>
                <ul className="links">
                    <li>
                        <a href="#services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#gallery">
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a href="#review">
                            Review
                        </a>
                    </li>
                    <li>
                        <a href="#gallery">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Nav
