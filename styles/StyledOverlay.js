import styled from "styled-components";

const StyledOverlay = styled.div`
    display: flex;
    align-items: start;
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    height: 100vh;

    @media (min-width: 1024px) {
        top: 0;
        align-items: center;
    }

    .content {
        position: relative;
        max-width: 600px;
        padding: 2rem 10px;
        white-space: pre-wrap;
        word-wrap: break-word;
        font-family: var(--informa);

        @media (min-width: 1024px) {
            padding: 2rem;
            margin-left: 5rem;
            max-width: 600px;
        }

        h2 {
            font-size: clamp(45px, 7vw, 62px);
            margin: 0;
            line-height: 1;
            word-wrap: break-word;
        }

        p {
            font-size: 20px;
        }

        .buttons {
            display: flex;
            align-items: center;
            margin: 2rem 0;

            @media (max-width: 1024px) {
                svg {
                    display: none;
                }
            }
        }
    }

    .splodge {
        position: absolute;
        bottom: -60px;
        right: 0;

        svg {
            transform: rotate(-160deg);
        }

        @media (max-width: 1024px) {
            display: none;
        }
    }
`;

export default StyledOverlay;