import { useEffect } from "react";
import StyledMenu from "@/styles/StyledMenu";
import { gsap } from 'gsap';

const Menu = () => {

    useEffect(() => {
        gsap.fromTo('.menu__wrapper', {
            yPercent: 100,
        },
        {
            yPercent: 0,
            ease: 'expo.out',
            duration: 1.7
        });

        gsap.set('.item', { yPercent: 100 });
        setTimeout(() => {
            gsap.to('.item', {
                yPercent: 0,
                duration: 2.3,
                ease: 'expo.out',
                stagger: .06
            });
        }, 600);

    }, []);

  return (
    <StyledMenu>
        <ul className="menu__list">
            <li className="menu__item">
                <span className="item">HOME</span>
            </li>
            <li className="menu__item">
                <span className="item">FOOTGOLF</span>
            </li>
            <li className="menu__item">
                <span className="item">SPLASH PARK</span>
            </li>
            <li className="menu__item">
                <span className="item">STOMPERS</span>
            </li>
            <li className="menu__item">
                <span className="item">ABOUT US</span>
            </li>
            <li className="menu__item">
                <span className="item">CONTACT</span>
            </li>
        </ul>
    </StyledMenu>
  )
}

export default Menu;
