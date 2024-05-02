// Footer.js
import React from 'react';
import './pages.css'; // Importing CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container_footer">
                <div className="social-icons">
                    <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <div className="param-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Contact Us</a>
                    <a href="#">FAQs</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

