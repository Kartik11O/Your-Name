import './Slider.css'
import React, { useRef, useEffect } from 'react';
function Slider() {
    const containerRef = useRef(null);

    useEffect(() => {
        const scrollHorizontally = (event) => {
            event.preventDefault();
            const container = containerRef.current;
            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
            container.scrollLeft -= delta * 40; // Adjust scrolling speed
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', scrollHorizontally);
            return () => container.removeEventListener('wheel', scrollHorizontally);
        }
    }, [])



    return (
        <>
            <div id="Container-Slider" ref={containerRef}>
                <div id="Container-scroll">
                    <div className="box"><img className='box-img' src="/src/assets/main.jpg" alt="" /></div>
                    <div className="box"><img className='box-img' src="/src/assets/b.jpg" alt="" /></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
            </div>
        </>
    )
}

export default Slider