import styled from 'styled-components';

const StyledNavbar = styled.nav.attrs({
    className: 'nav__class'
})`
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
        z-index: 9999999;

        @media (max-width: 350px) {
            display: none;
        }

        @media(min-width: 1024px) {
            display: none;
        }
    }

    .nav__links {
        font-family: var(--informa);
        font-size: 18px;
        font-weight: 800;
        
        .nav__list {
            display: flex;
            align-items: center;
            list-style: none;
            padding: 0;
        }

        .nav__item {
            display: flex;
            align-items: center;
            margin: 0 1rem;
            cursor: pointer;

            
        }

        .nav__span {
            display: inline-block;
            position: relative;
            
        }

        .nav__span:after {
            content: '';
            height: 3px;
            background-color: var(--white);
            width: 0%;
            display: block;
            transition: .5s ease-in-out;
            position: absolute;
            right: 0;
        }

        .nav__span:hover:after {
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

        .dropdown__wrapper {
            display: flex;
            align-items: center;
            position: relative;
        }

        .dropdown {
            display: flex;
            flex-direction: column;
            text-align: center;
            position: absolute;
            top: 2.5rem;
            width: 100%;
            background-color: var(--purple);
            border-radius: 10px;
            padding: 10px 0;

            ul {
                list-style: none;
                padding: 0;

                li {
                    position: relative;
                    margin-bottom: 15px;
                    overflow: hidden;
                    cursor: pointer;
                }

                span {
                    display: block;
                    transition: .5s;
                }

                span:hover {
                    opacity: .5;
                }
            }
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