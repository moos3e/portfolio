import React from 'react';
import { SliderData } from './SliderData';
import '../styles/Slideshow.css';

const Slideshow: React.FC = () => {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef<number | null>(null);
    const delay = 3000;

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = window.setTimeout(
            () => setIndex((prevIndex) => (prevIndex === SliderData.length - 1 ? 0 : prevIndex + 1)),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {SliderData.map((slide, index) => (
                    <div key={index} className="slide">
                        <img src={slide.image} alt={`Slide ${index}`} className="image" />
                    </div>
                ))}
            </div>
            <div className="slideshowDots">
                {SliderData.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => setIndex(idx)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;