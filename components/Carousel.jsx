import React from 'react';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';
import Arrow from '@/public/assets/carousel-arrow.svg';
import WhiteArrow from '@/public/assets/button-arrow-white.svg';
import BlueArrow from '@/public/assets/button-arrow.svg';
import img from '@/public/header.png';
import Splodge from '@/public/assets/splodge1.svg';


const StyledCarouselItem = styled.div`
    position: relative;
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

const StyledOverlay = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;

    .content {
        position: relative;
        padding: 2rem;
        margin-left: 5rem;
        max-width: 600px;
        white-space: pre-wrap;
        word-wrap: break-word;
        font-family: var(--informa);

        h2 {
            font-size: 62px;
            margin: 0;
            line-height: 0.9;
        }

        p {
            font-size: 20px;
        }

        .buttons {
            display: flex;
            align-items: center;
            margin: 2rem 0;
        }
    }

    .splodge {
        position: absolute;
        bottom: -60px;
        right: 0;

        svg {
            transform: rotate(-160deg);
        }
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
        z-index: 9999;

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
                    {btn1 && (
                    <span className='pill__btn__secondary'>
                        {btn1}
                        <WhiteArrow />
                    </span>
                    )}
                    {btn2 && (
                        <span className='pill__btn__primary'>
                        {btn2}
                        <BlueArrow />
                    </span>
                    )}
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
    </StyledCarousel> 
    </>
  )
}

export default Carousel;

