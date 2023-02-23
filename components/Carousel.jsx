import React from 'react';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';
import Arrow from '@/public/assets/carousel-arrow.svg';
import img from '@/public/header.png';

const StyledCarouselItem = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 65vh;
    color: var(--white);

    .carousel__vid {
        position: relative;
        width: 100%;
        height: 100%;

        video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .carousel__img {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url(${img.src});
        background-size: cover;
        background-position: bottom; 
    }

    @media (min-width: 1024px) {
        height: 100vh;
    }
`;


const StyledCarousel = styled.div`
    position: relative;

    @media(max-width: 1024px) {
        padding-top: 200px;
    }

    .inner {
        white-space: nowrap;
        transition: transform 0.5s;
    }

    .indicators {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 80%;
        right: 1rem;

        @media(min-width: 1024px) {
            top: 40%;
        }

        .rotate {
            transform: rotate(180deg);
        }

        button {
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
    }
`;


export const CarouselItem = ({ children, width }) => {
  return (
    <StyledCarouselItem style={{ width: width, color: 'red' }}>
        { children }
    </StyledCarouselItem>
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
    </StyledCarousel> 
  )
}

export default Carousel;

