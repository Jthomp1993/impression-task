import { useContext } from 'react';
import AppContext from "@/context/AppContext";

function Hamburger() {
    const { isActive, setIsActive } = useContext(AppContext)

    const toggleIsActive = () => {
        setIsActive(!isActive);
    }

  return (
        <button onClick={toggleIsActive} className={`hamburger hamburger--squeeze ${isActive ? 'is-active' : ''}`} type="button">
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
  )
}

export default Hamburger;
