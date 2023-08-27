import styled from "styled-components";

interface SideBarListItemProps {
    active?: boolean;
}

interface MobileSideBarProps {
    isOpen: boolean;
}

export const Container = styled.div<MobileSideBarProps>`
    width: 300px;
    height: 100%;
    background-color: #1F2A37;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;

    @media (max-width: 688px) {
        display: none;
        ${props => props.isOpen && `
            display: flex;
            width: 100%;
            height: 100%;
            background-color: #1F2A37;
            position: absolute;
            z-index: 99;
        `}
    }

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

    &:last-child {
        margin-top: 0px;
    }
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

export const Separator = styled.div`
    width: 100%;
    height: 3px;
    background-color: #232E3B;
`

export const SideBarFooter = styled.div`
    position: absolute;
    bottom: 4px;
    display: flex;
    gap: 15px;
    align-items: center;
`

export const MobileIcon = styled.div`

    display: none;

    @media (max-width: 688px) {
        position: absolute;
        top: 20px;
        right: 20px;
        display: block;
        z-index: 999;
    }
`