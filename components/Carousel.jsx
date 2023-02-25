import React from 'react';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import StyledCarousel from '@/styles/StyledCarousel';
import StyledCarouselItem from '@/styles/StyledCarouselItem';
import StyledOverlay from '@/styles/StyledOverlay';
import Arrow from '@/public/assets/carousel-arrow.svg';
import WhiteArrow from '@/public/assets/button-arrow-white.svg';
import BlueArrow from '@/public/assets/button-arrow.svg';
import Splodge from '@/public/assets/splodge1.svg';


export const CarouselItem = ({ children, width, heading, info, btn1, btn2 }) => {
  return (
    <>
    <StyledCarouselItem style={{ width: width }}>
        { children }

        <StyledOverlay>
            {heading && info && btn1 && btn2 && (
                <div className="content">
                <h2>{heading}</h2>
                <p>{info}</p>
                <div className="buttons">
                    <span className='pill__btn__secondary'>
                        {btn1}
                        <WhiteArrow />
                    </span>
                        <span className='pill__btn__primary'>
                        {btn2}
                        <BlueArrow />
                    </span>    
                </div>
                <div className="splodge">
                <Splodge />
            </div>
            </div>
            )} 
        </StyledOverlay>
    </StyledCarouselItem>
    </>
  )
}


const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if(newIndex < 0) {
            newIndex = React.Children.count(children) -1;
        } else if(newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    {/** Enable swiping on touch devices */}
    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

  return (
    <>
    <StyledCarousel {...handlers}>
        <div className="inner" style={{ transform: `translate(-${activeIndex * 100}%)`}}>
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, { width: '100%' });
            })}
        </div>
        <div className="indicators">
            <button className='next__btn' onClick={() => updateIndex(activeIndex + 1)}>
                <Arrow />
            </button>
            <button className='prev__btn' onClick={() => updateIndex(activeIndex - 1)}>
                <Arrow className='rotate' />
            </button>
        </div>
        <div className="pagination">
            {React.Children.map(children, (child, index) => {
                return (
                    <button className="pagination__btn" onClick={() => updateIndex(index)}>
                        <div className={`${index === activeIndex ? 'active__blob' : 'blob'}`}></div>
                    </button>
                )
            })}
        </div>
    </StyledCarousel> 
    </>
  )
}

export default Carousel;

