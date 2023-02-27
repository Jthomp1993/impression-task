import styled from "styled-components";

const StyledContent = styled.div`
    
    background-color: var(--purple);
    display: flex;
    justify-content: center;
    flex-shrink: 1;

    .info {
        position: relative;
        text-align: center;
        margin-top: 5rem;
        margin-bottom: 10rem;
        padding: 0 1.5rem;

        @media (min-width: 1024px) {
            max-width: 60%;
        }

        p {
            font-family: var(--informa);
            font-weight: 600;
            font-size: clamp(26px, 5vw, 38px);
        }
    }

    .splodge__one {
        position: absolute;
        top: -60px;
        left: -130px;
    }

    .splodge__two {
        position: absolute;
        bottom: -10px;
        right: -130px;
    }

    @media (max-width: 1024px) {
        .splodge__one {
            display: none;
        }

        .splodge__two {
            display: none;
        }
    }
`;

export default StyledContent;