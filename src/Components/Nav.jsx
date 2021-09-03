import { useState } from "react"
import { BiPhotoAlbum } from "react-icons/bi"
import { BiWrench } from "react-icons/bi"
import { VscOpenPreview } from "react-icons/vsc"
import { AiOutlinePhone } from "react-icons/ai"

const Nav = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <nav>
                <div className="nav-branding">
                    <div className="logo">
                    </div>
                    <div className="company-name">Briggs AC Repair</div>
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
                            <div className="icon">
                            <BiWrench />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#gallery">
                            Gallery
                            <div className="icon">
                                <BiPhotoAlbum/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#review">
                            Review
                            <div className="icon">
                                <VscOpenPreview />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact
                            <div className="icon">
                                <AiOutlinePhone />
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Nav
