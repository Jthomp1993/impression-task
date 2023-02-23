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
        font-family: var(--informa);
        font-size: 18px;
        font-weight: 800;
        
        ul {
            display: flex;
            align-items: center;
            list-style: none;
            padding: 0;
        }

        li {
            display: flex;
            align-items: center;
            margin: 0 1rem;
            cursor: pointer;

            
        }

        span {
            display: inline-block;
            position: relative;
            
        }

        span:after {
            content: '';
            height: 3px;
            background-color: var(--white);
            width: 0%;
            display: block;
            transition: .5s ease-in-out;
            position: absolute;
            right: 0;
        }

        span:hover:after {
            width: 100%;
            left: 0;
            right: auto;
        }

        svg {
            margin-left: 5px;
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
            border: 2px solid var(--black);
            cursor: pointer;

            @media (min-width: 1024px) {
                border: 2px solid var(--white);
            }
        }

        .circle:nth-of-type(2) {
            @media(max-width: 1024px) {
                border: 2px solid var(--blue);
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