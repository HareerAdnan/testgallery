import React from 'react';
import './Footer.css';
import { Button } from './button';
import { Link } from 'react-router-dom';
import logo from './img/logo1.png';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join and Register yourselves and make your preparations at ease.
                </p>
                <p className="footer-subscription-text">
                    Course Content, Video links, Past Papers and Reminders under one roof.
                </p>
                <div className="input-areas">
                    <form>
                        <input
                            className="footer-input"
                            name="email"
                            type="email"
                            placeholder="Your Email"
                        />
                        <Button buttonStyle="btn--outline">SIGNUP</Button>
                    </form>
                </div>
            </section>
            <div class="footer-links">
                <div className="footer-link-wrapper">
                    <div class="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">ENTRYTESTS</Link>
                        <Link to="/">SCHOLORSHIPS</Link>
                        <Link to="/">REMINDERS</Link>
                    </div>
                    <div class="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/">CONTACT</Link>
                        <Link to="/">SUPPORT</Link>
                        <Link to="/">INFORMATION</Link>
                        <Link to="/">FREE</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div class="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/">VIDEO</Link>
                        <Link to="/">TEAM</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencer</Link>
                    </div>
                    <div class="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section class="social-media">
                <div class="social-media-wrap">
                    <div class="footer-logo">
                        <Link to="/" className="social-logo">
                            TESTGALLERY
                            <img src={logo} alt="Logo1" width={70} height={70} />
                        </Link>
                    </div>
                    <small class="website-rights">TESTGALLERY © 2023</small>
                    <div class="social-icons">
                        <Link
                            class="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i class="fab fa-facebook-f" />
                        </Link>
                        <Link
                            class="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i class="fab fa-instagram" />
                        </Link>
                        <Link
                            class="social-icon-link youtube"
                            to="/"
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i class="fab fa-youtube" />
                        </Link>
                        <Link
                            class="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i class="fab fa-twitter" />
                        </Link>
                        <Link
                            class="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i class="fab fa-linkedin" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
