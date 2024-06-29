import React, { useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = (props) => {
    const { children } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
        }
    };

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length);
    }, [children]);

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div className="carousel-content-wrapper">
                    <div
                        className="carousel-content"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {children}
                    </div>
                </div>
                <div className="button-container">
                    <button onClick={prev} className="control-arrow left-arrow">
                        &lt;
                    </button>
                    <span className="slide-number" color='white'>{currentIndex + 1}/{length}</span>
                    <button onClick={next} className="control-arrow right-arrow">
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
