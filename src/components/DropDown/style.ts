import styled, { css, keyframes } from "styled-components";

interface DropDownProps {
    isOpen: boolean;
}

const arrowAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(2px);
    }
    100% {
        transform: translateY(0);
    }
`;

const arrowAnimationReverse = keyframes`
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-2px);
    }
    100% {
        transform: translateX(0);
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    user-select: none;
    -webkit-user-select: none;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DropDownListItem = styled.li`
    padding: 7px;
    border-radius: 8px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    color: #9CA3AF;
`;

export const Arrow = styled.div<DropDownProps>`
    margin-top: 5px;

    &:hover {
        cursor: pointer;
    }

    ${({ isOpen }) =>isOpen && css`
      animation: ${arrowAnimation} 0.5s ease-in-out;
    `}

    ${({ isOpen }) =>!isOpen && css`
        animation: ${arrowAnimationReverse} 0.5s ease-in-out;
    `}
    
`

export const DropDownContainer = styled.div`
    padding: 0px 13px;
`   