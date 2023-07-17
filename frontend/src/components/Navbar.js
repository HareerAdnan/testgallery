import { Button } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from './img/logo1.png';
//import { Button } from './button';
import Dropdown from './dropdown';
import './Navbar.css';
// import { getToken, removeToken } from '../services/LocalStorageServices';
import { AuthContext } from '../utilis/AuthContext';

function Navbar() {
    const { token,  removeToken } = useContext(AuthContext);

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);




    



    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const changeBackground = () => {
        if(window.scrollY >= 80) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      };
    
      window.addEventListener('scroll', changeBackground);

    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={logo} alt="logo1" width={70} height={70} />
                        TESTGALLERY
                    </Link>

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/scholarships"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                SCHOLORSHIPS
                            </Link>
                        </li>
                        <li className="nav-item dropdown-toggler">
                            <Link to="/entrytest" className="nav-links" onClick={closeMobileMenu}>
                                ENTRYTEST <i className="fas fa-caret-down" />
                            </Link>
                            <Dropdown />
                        </li>

                        <li>

                            <Link
                                to="/LoginReg"
                                className="nav-links-mobile"
                                onClick={closeMobileMenu}
                            >
                                Login/Registration
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                className="nav-links-mobile"
                                onClick={closeMobileMenu}
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                    {token  ? 
                    <Button
                        component={NavLink}
                        to="/"
                        sx={{
                            backgroundColor: '#ffb347',
                            color: 'white',
                            textTransform: 'none',
                            '&.active': {
                            backgroundColor: '#ffb347',
                            },
                            p: '5px 10px',
                        }}
                        onClick={()=>removeToken()}
                    >
                    Logout
                    </Button>
                        : 

                    
                    <Button
                        component={NavLink}
                        to="/login"
                        sx={{
                            backgroundColor: '#ffb347',
                            color: 'white',
                            textTransform: 'none',
                            '&.active': {
                            backgroundColor: '#ffb347',
                            },
                            p: '5px 10px',
                        }}
                    >
                        Login/Signup
                    </Button>
                    }
                </div>
            </nav>
        </>
    );
}

export default Navbar;