const Nav = () => {
    return (
        <nav>
            <div className="nav-branding">
                <div className="logo"></div>
                <div className="company-name">RV Inspection and Repair Services</div>
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
                    <a href="#gallery">
                        Contact
                    </a>
                </li>
            </ul>
            {/* <div className="hamburger"></div> */}
        </nav>
    )
}

export default Nav
