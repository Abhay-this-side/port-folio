import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';
import phoneIcon from '../../assets/phone.png';
import emailIcon from '../../assets/email.png';
import linkedinIcon from '../../assets/linkedin.png';
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleContactClick = () => {
        setShowModal(true);
        setShowMenu(false);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className="menu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="item">About</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="item">Skills</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="item">Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="item">Message</Link>
            </div>
            <button className="bttn" onClick={handleContactClick}>
                <img src={contactImg} alt="" className="boxImg" />Details</button>

            <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='message' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Message</Link>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Contact Me :</h2>
                        <span className="close-modal" onClick={closeModal}>&times;</span>
                        <p><img src={phoneIcon} alt="Phone" />+91-7895441390</p>
                        <p><img src={emailIcon} alt="Email" />taskforabhay@gmail.com</p>
                        <p>
                            <a href="https://www.linkedin.com/in/abhay-raj-singh-428914212/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedinIcon} alt="LinkedIn" /> Abhay Raj Singh
                            </a>
                        </p>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;