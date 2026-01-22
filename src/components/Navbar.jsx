import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                ERCHUUDIINDELGUUR
            </div>

            {/* Menu Trigger (Hamburger / X) */}
            <div
                className="menu-trigger"
                onClick={toggleMenu}
            >
                <motion.div
                    className="menu-line"
                    animate={isMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                />
                <motion.div
                    className="menu-line"
                    animate={isMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                />
            </div>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="menu-overlay"
                    >
                        <a href="#emegtei" className="menu-link">Эмэгтэй</a>
                        <a href="#eregtei" className="menu-link">Эрэгтэй</a>
                        <a href="#hosuudad" className="menu-link">Хосуудад</a>
                        <a href="#party" className="menu-link">Party Тоглоом</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
