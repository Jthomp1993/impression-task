import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

const StyledBanner = styled.div.attrs({
    className: 'banner'
})`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: var(--light-purple);
    margin: 0;
    z-index: 9999999999999;

    p {
        margin: 5px 0;
        font-family: var(--dm-sans);
        font-size: 12px;
    }

    span {
        font-family: var(--dm-sans);
        font-size: 12px;
        text-decoration: underline;
        margin-left: 1rem;
        cursor: pointer;
    }

    .arrow {
        font-size: 16px;
    }

    @media (min-width: 1024px) {
        p {
            margin: 10px 0;
            font-size: 16px;
        }

        span {
            font-size: 16px;
        }
    }
`;

function Banner() {

  return (
    <StyledBanner>
        <p>Super Saver Discount for parties</p> <span><strong>Learn more </strong></span>
        <MdKeyboardArrowRight className="arrow" />
    </StyledBanner>
  )
}

export default Banner;
