import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaYoutube, FaLongArrowAltRight } from 'react-icons/fa';
import donutImg from '../assets/donut.png';
import shakeImg from '../assets/shake.png';

const slides = [
    {
        id: 1,
        subtitle: "GO NUTS",
        title: "HAVE SOME\nDONUTS!",
        desc: "Looking for an excellent, responsive full width background slider? Get this one and 200+ more professional templates with Slider Revolution.",
        image: donutImg,
        bgColor: "#1a1512"
    },
    {
        id: 2,
        subtitle: "TREAT YO SELF",
        title: "STRAWBERRY\nSHAKE",
        desc: "Experience the rich creamy taste of our premium strawberry shakes, made with fresh fruit and love.",
        image: shakeImg,
        bgColor: "#2a0f12"
    }
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: slides[current].bgColor,
            position: 'relative',
            overflow: 'hidden',
            transition: 'background-color 1s ease'
        }}>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 10%' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Text Content */}
                    <div style={{ flex: 1, zIndex: 10 }}>
                        <motion.h4
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{ color: '#c9a473', letterSpacing: '2px', fontWeight: '900', marginBottom: '10px' }}
                        >
                            {slides[current].subtitle}
                        </motion.h4>
                        <motion.h1
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, type: "spring" }}
                            style={{
                                fontSize: '80px',
                                lineHeight: '1',
                                fontWeight: '900',
                                fontStyle: 'italic',
                                marginBottom: '40px',
                                textTransform: 'uppercase'
                            }}
                        >
                            {slides[current].title.split('\n').map((line, i) => (
                                <div key={i}>{line}</div>
                            ))}
                        </motion.h1>
                        <motion.button
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            style={{
                                padding: '15px 40px',
                                background: 'transparent',
                                border: '2px solid rgba(255,255,255,0.2)',
                                borderRadius: '30px',
                                color: 'white',
                                fontWeight: 'bold',
                                letterSpacing: '1px'
                            }}
                        >
                            SHOP NOW
                        </motion.button>
                    </div>

                    {/* Image */}
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 5 }}>
                        <motion.img
                            src={slides[current].image}
                            alt="Hero Product"
                            initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                            style={{ maxWidth: '600px', width: '100%', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))' }}
                        />
                    </div>

                    {/* Right Description */}
                    <div style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', width: '200px', textAlign: 'left' }}>
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>
                                0{current + 1} <span style={{ opacity: 0.5, fontSize: '16px' }}>/ 0{slides.length}</span>
                            </div>
                            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc' }}>
                                {slides[current].desc}
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Floating Particles (Static for now, could animate) */}

            {/* Bottom Footer */}
            <div style={{ position: 'absolute', bottom: '40px', right: '50px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}>FOLLOW US</span>
                <FaFacebookF />
                <FaInstagram />
                <FaYoutube />
            </div>

            {/* Navigation Dots */}
            <div style={{ position: 'absolute', bottom: '40px', left: '50px', display: 'flex', gap: '10px' }}>
                {slides.map((_, idx) => (
                    <div
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: idx === current ? '#c9a473' : 'rgba(255,255,255,0.3)',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
