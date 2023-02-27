import styled from "styled-components";
import img from '@/public/header.png';

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

export default StyledCarouselItem;