import './Slider.css'
import React, { useRef, useEffect } from 'react';
function Slider() {
    const containerRef = useRef(null);

    useEffect(() => {
        const scrollHorizontally = (event) => {
            event.preventDefault();
            const container = containerRef.current;
            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
            container.scrollTo({
                left: container.scrollLeft - delta * 400, // Adjust scrolling speed
                behavior: 'smooth' // Smooth scrolling behavior
            });
        };
    
        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', scrollHorizontally);
            return () => container.removeEventListener('wheel', scrollHorizontally);
        }
    }, [])

    
    return (
        <div id="Container-Slider" ref={containerRef}>
            <div id="Container-scroll">
                <div className="box"><img className='box-img' src="src/assets/chainsaw-4.jpg" alt=""/></div>
                <div className="box"><img className='box-img' src="src/assets/chainsaw-3.jpg" alt=""/></div>
                <div className="box"><img className='box-img' src="src/assets/chainsaw-2.jpg" alt=""/></div>
                <div className="box"><img className='box-img' src="src/assets/chainsaw-5.jpg" alt=""/></div>
            </div>
        </div>
    );
}


export default Slider