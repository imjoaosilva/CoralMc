import styled from "styled-components";

interface SideBarListItemProps {
    active?: boolean;
}

export const Container = styled.div`
    width: 300px;
    height: 100%;
    background-color: #1F2A37;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`

export const SideBarTitle = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    color: #9CA3AF;
`

export const SideBarList = styled.ul`
    width: 100%;
    list-style: none;
    margin-top: 20px;
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
`

export const SideBarListItem = styled.li<SideBarListItemProps>`
    padding: 7px;
    border-radius: 8px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    color: #9CA3AF;

    transition: all 0.2s linear;

    &:hover {
        cursor: pointer;
        background-color: #374151;
        opacity: 0.8;
    }

    ${props => props.active && `
        background-color: #374151;

        &:hover {
            opacity: 1;
        }
    `}
`