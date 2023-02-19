import styled from 'styled-components';

const StyledNavbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75px;
    background-color: var(--white);
    padding: 0 10px;
    position: relative;

    @media (min-width: 1024px) {
        height: 100px;
        background-color: transparent;
    }

    .brand {
        height: 100%;
        margin-top: 1.5rem;
        position: absolute;
        left: 20px;

        @media(max-width: 1024px) {
            display: none;
        }
    }

    .mobile__brand {
        height: 100%;
        margin-top: 1rem;

        @media(min-width: 1024px) {
            display: none;
        }
    }

    .nav__links {
        font-family: var(--dm-sans);
        font-weight: 800;
        
        ul {
            display: flex;
            list-style: none;
            padding: 0;
        }

        li {
            margin: 0 1rem;
            cursor: pointer;
        }

        @media(max-width: 1024px) {
            display: none;
        }
    }

    .nav__btns {
        display: flex;
        position: absolute;
        right: 20px;

        @media(max-width: 1024px) {
            right: 15px;
        }

        .circle {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            border: 2px solid black;
            cursor: pointer;

            @media (min-width: 1024px) {
                border: 2px solid var(--white);
            }
        }

        svg {
            color: black;
            font-size: 24px;

            @media (min-width: 1024px) {
                color: var(--white);
            }
        }

        .user {
            margin-right: 10px;
        }

        .booking__btn {
            margin-right: 10px;

            svg {
                margin-left: 10px;
            }

            @media(max-width: 1200px) {
                display: none;
            }
        }

        @media (max-width: 1024px) {
            .booking__btn {
                display: none;
            }
        }
    }
`;

export default StyledNavbar;