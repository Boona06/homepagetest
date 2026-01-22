import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Slide from './Slide';
import './Slider.css';

// Import local images
import emegteiImg from '../assets/menmodel.png';
import eregteiImg from '../assets/menmodel.png';
import hosuudadImg from '../assets/menmodel.png';
import partyImg from '../assets/menmodel.png';

// Placeholder data - will replace with proper assets later
const SLIDES_DATA = [
    {
        id: 1,
        subtitle: 'Халуухан',
        title: 'Эмэгтэй',
        description: 'ТА',
        image: emegteiImg,
        color: '#ff66b2' // Pink
    },
    {
        id: 2,
        subtitle: 'Хүчихэг',
        title: 'Эрэгтэй',
        description: 'ТА',
        image: eregteiImg,
        color: '#ff2e2e' // Red
    },
    {
        id: 3,
        subtitle: 'Жаргалтай',
        title: 'Хосуудад',
        description: 'ЗОРИУЛАВ',
        image: hosuudadImg,
        color: '#8b4513' // Brown
    },
    {
        id: 4,
        subtitle: 'Хөгжилтэй',
        title: 'Party Тоглоом',
        description: 'Хэрэгтэй бол',
        image: partyImg,
        color: '#a855f7' // Purple
    }
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % SLIDES_DATA.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + SLIDES_DATA.length) % SLIDES_DATA.length);
    };

    return (
        <div className="slider" onClick={nextSlide}> {/* Temp click to slide */}
            <AnimatePresence initial={false}>
                <Slide
                    key={SLIDES_DATA[currentIndex].id}
                    data={SLIDES_DATA[currentIndex]}
                    isActive={true}
                />
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
                className="nav-button prev"
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            >
                &lt;
            </button>
            <button
                className="nav-button next"
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            >
                &gt;
            </button>
        </div>
    );
};

export default Slider;
