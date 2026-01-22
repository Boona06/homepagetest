import React from 'react';
import { motion } from 'framer-motion';


const Slide = ({ data, isActive }) => {
    const { title, subtitle, image, description, color } = data;

    return (
        <motion.div
            className="slide"
            style={{ '--slide-color': color }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Background Elements */}
            <div
                className="slide__background"
                style={{ background: `radial-gradient(circle at 50% 50%, ${color} 0%, #111 85%)` }}
            />
            {/* Noise Overlay */}
            <div className="slide__noise" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")` }} />

            {/* Decorative Floating Elements */}
            <motion.div
                className="decorative-circle-1"
                animate={{ y: [0, -50, 0], rotate: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="decorative-circle-2"
                animate={{ y: [0, 80, 0], x: [0, 40, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Content Grid */}
            <div className="slide__grid">
                {/* Typography Layer (Left) */}
                <div className="slide__content">
                    <motion.h3
                        initial={{ x: -50, opacity: 0 }}
                        animate={isActive ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                        className="slide__subtitle"
                    >
                        {subtitle}
                    </motion.h3>
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={isActive ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                        transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                        className="slide__title"
                        style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.9)' }}
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ x: -50, opacity: 0 }}
                        animate={isActive ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                        transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                        className="slide__description"
                    >
                        {description}
                    </motion.p>
                    
                    <motion.button
                        initial={{ y: 50, opacity: 0 }}
                        animate={isActive ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                        transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
                        className="slide__button"
                    >
                        Энд дар
                    </motion.button>
                </div>

                {/* Image Layer (Right/Center) */}
                <div className="slide__image-wrapper">
                    <motion.img
                        src={image}
                        alt={title}
                        className="slide__image"
                        initial={{ scale: 0.8, opacity: 0, x: -50 }}
                        animate={isActive ? { scale: 1, opacity: 1, x: 0 } : { scale: 0.8, opacity: 0, x: -50 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Slide;
