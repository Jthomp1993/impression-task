import { createContext, useState, useEffect } from 'react';
import { gsap } from 'gsap';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false);
    const [menu, setMenu] = useState(false);

    const openMenu = () => {
        setMenu(true);
    }

    const closeMenu = () => {
        gsap.to('#menu__wrapper', {
            yPercent: 100,
            duration: 1,
            ease: 'expo.out'
        });
        setTimeout(() => {
            setMenu(false);
        }, 500);
    }

    return (
        <AppContext.Provider value={{
            isActive,
            setIsActive,
            menu,
            setMenu,
            openMenu,
            closeMenu
        }}>
          {children}
        </AppContext.Provider>
    )
}

export default AppContext;

