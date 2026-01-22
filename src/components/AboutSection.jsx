import React from 'react';
import { FaBreadSlice, FaMugHot, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Feature = ({ icon, title, text, delay }) => (
    <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '15px' }}
    >
        <div style={{ fontSize: '40px', color: '#c9a473' }}>{icon}</div>
        <h3 style={{ fontSize: '20px', color: '#1a1512', fontWeight: 'bold' }}>{title}</h3>
        <p style={{ color: '#666', lineHeight: '1.6', fontSize: '14px' }}>{text}</p>
    </motion.div>
);

const AboutSection = () => {
    return (
        <section style={{ padding: '100px 10%', background: 'white' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{ color: '#c9a473', letterSpacing: '2px', fontWeight: '900', marginBottom: '10px', textTransform: 'uppercase' }}
                    >
                        Who We Are
                    </motion.h4>
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        style={{ color: '#1a1512', fontSize: '48px', fontWeight: '900' }}
                    >
                        The Art of Baking
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        style={{ maxWidth: '600px', margin: '20px auto 0', color: '#666', lineHeight: '1.8' }}
                    >
                        We believe that baking is not just about ingredients, but about passion, precision, and love. Our recipes have been perfected over decades.
                    </motion.p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px' }}>
                    <Feature
                        icon={<FaBreadSlice />}
                        title="Premium Ingredients"
                        text="We source only the finest organic flour, chocolate, and fruits from trusted local farmers."
                        delay={0.4}
                    />
                    <Feature
                        icon={<FaMugHot />}
                        title="Always Fresh"
                        text="Every item is baked fresh daily to ensure the perfect texture and flavor in every bite."
                        delay={0.6}
                    />
                    <Feature
                        icon={<FaHeart />}
                        title="Made with Love"
                        text="Our bakers pour their heart into every creation, making sure you feel the warmth in every slice."
                        delay={0.8}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
