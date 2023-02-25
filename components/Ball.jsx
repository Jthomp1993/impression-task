import styled from "styled-components";
import { useEffect } from "react";
import { gsap } from 'gsap';

const StyledBall = styled.div`

    .ball {
        background-color: var(--white);
        width: 20px;
        height: 20px;
        border-radius: 50%;
        pointer-events: none;
        position: fixed;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        mix-blend-mode: difference;

        @media (max-width: 1024px) {
            display: none;
        }
    }
`;

const Ball = () => {

    useEffect(() => {
        const ball = document.querySelector(".ball");
        gsap.set(".ball", {xPercent: -50, yPercent: -50});
        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = { x: pos.x, y: pos.y };
        const speed = 0.2;

        const xSet = gsap.quickSetter(ball, "x", "px");
        const ySet = gsap.quickSetter(ball, "y", "px");

        window.addEventListener("mousemove", e => {    
        mouse.x = e.x;
        mouse.y = e.y;  
        });

        gsap.ticker.add(() => {
        
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
        });

    }, []);

  return (
    <StyledBall>
        <div className="ball"></div>
    </StyledBall>
  )
}

export default Ball;
