import styled from "styled-components";

const StyledMenu = styled.div.attrs({
    className: 'menu__wrapper'
})`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: var(--light-purple);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    .menu__list {
        position: relative;
        top: -5vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 400px;
        list-style: none;

        .menu__item {
            font-family: var(--informa);
            font-size: clamp(32px, 5vw, 48px);
            font-weight: 600;
            opacity: 1;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: .5s;
           
            .item {
                display: block;
            }
        }

        li:hover {
            opacity: .5;
        }
    }
`;

export default StyledMenu;