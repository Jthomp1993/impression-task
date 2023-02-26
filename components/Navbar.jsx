import { useContext, useEffect } from 'react';
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


function Navbar() {
    const { setMenu, menu, closeMenu, openMenu } = useContext(AppContext);

  return (
    <>
    <StyledNavbar>
        <StyledHamburger onClick={menu ? closeMenu : openMenu}>
            <Hamburger />
        </StyledHamburger>
        <div className="brand">
            <Image src={logo} width={120} alt="Yeah! logo" />
        </div>

        <div className="nav__links">
            <ul>
                <li>
                    <span>HOME</span>
                </li>
                <li>
                    <span>ATTRACTIONS</span>
                    <IoIosArrowDown />
                </li>
                <li>
                    <span>PARTIES</span>
                </li>
                <li>
                    <span>CONTACT</span>
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
