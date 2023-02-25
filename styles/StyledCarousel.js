import styled from "styled-components";

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

    .pagination {
        display: flex;
        justify-content: center;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        margin: 2rem 0;
        

        @media (min-width: 1024px) {
            justify-content: end;
            top: 90%;
            right: 2rem;
            margin: 0;
        }

        button {
            border: none;
            background: none;
            cursor: pointer;
        }

        .blob {
            height: 12px;
            width: 12px;
            border-radius: 50px;
            background-color: var(--purple);
        }

        .active__blob {
            height: 20px;
            width: 20px;
            border-radius: 50px;
            background-color: var(--white);
        }

    }
`;

export default StyledCarousel;