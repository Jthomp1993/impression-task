import { useContext, useState, useEffect } from 'react';
import AppContext from '@/context/AppContext';
import StyledNavbar from "@/styles/StyledNavbar"
import StyledHamburger from '@/styles/StyledHamburger';
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import Arrow from "@/public/assets/button-arrow.svg";
import Hamburger from "@/components/Hamburger";
import Menu from '@/components/Menu';
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { gsap } from 'gsap';
import ClickAwayListener from 'react-click-away-listener';
import Account from '@/public/assets/account.svg';


function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const { menu, closeMenu, openMenu } = useContext(AppContext);

    useEffect(() => {
        gsap.set('.dropdown', { autoAlpha: 0, yPercent: 20 });
    },[]);
    const openDropdown = () => {
        gsap.set('.dropdown', { autoAlpha: 0, yPercent: 20 });
        setDropdown(true);
        gsap.to('.dropdown', {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: 'expo.out'
        });
    }

    const closeDropdown = () => {
        gsap.to('.dropdown', {
            autoAlpha: 0,
            yPercent: 20,
            duration: 1,
            ease: 'expo.out'
        });

        setDropdown(false);
    }


  return (
    <>
    <StyledNavbar>
        <StyledHamburger onClick={(menu ? closeMenu : openMenu)}>
            <Hamburger />
        </StyledHamburger>
        <div className="brand">
            <Image src={logo} width={120} alt="Yeah! logo" />
        </div>

        <div className="nav__links">
            <ul className='nav__list'>
                <li className='nav__item'>
                    <span className='nav__span'>HOME</span>
                </li>
                <ClickAwayListener onClickAway={closeDropdown}>
                <li className='nav__item' onClick={dropdown ? closeDropdown : openDropdown}>
                    <div className="dropdown__wrapper">
                        <span className='nav__span'>ATTRACTIONS</span>
                        <IoIosArrowDown />
                            
                            <div className="dropdown">
                                <ul>
                                    <li>
                                        <span className='attraction'>FOOTGOLF</span>
                                    </li>
                                    <li>
                                        <span className='attraction'>SPLASHPARK</span>
                                    </li>
                                    <li>
                                        <span className='attraction'>STOMPERS</span>
                                    </li>
                                </ul>
                            </div>
                            
                    </div>
                </li>
                </ClickAwayListener>
                <li className='nav__item'>
                    <span className='nav__span'>PARTIES</span>
                </li>
                <li className='nav__item'>
                    <span className='nav__span'>CONTACT</span>
                </li>
            </ul>
        </div>

        <div className="mobile__brand">
            <Image src={logo} width={100} alt="Yeah! logo" />
        </div>

        <div className="nav__btns">
            <span className="nav__btn booking__btn">
                MAKE A BOOKING
                <Arrow />
            </span>
            <div className="circle user">
                <AiOutlineUser />
            </div>
            <div className="circle">
                <AiOutlineShoppingCart />
            </div>
        </div>
    </StyledNavbar>

    {menu && (
        <Menu />
    )}
    </>
  )
}

export default Navbar;
