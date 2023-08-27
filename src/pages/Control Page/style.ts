import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 80px);
    background-color: #111827;
    overflow-x: hidden;
    overflow-y: auto;
`;

export const Content = styled.div`
    padding: 40px;

    @media (max-width: 688px) {
        padding: 20px;
        margin-top: 50px;
    }
`

export const Card = styled.div`
    margin-top: 40px;
    width: 270px;
    height: 270px;
    background-color: #1F2A37;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    outline: 1px solid #2A3342;
`

export const CardText = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    color: #D0D2D5;
    display: flex;
    align-items: center;
    gap: 10px;
    text-wrap: nowrap;

    @media (max-width: 968px) {
        font-size: 17px;
    }
`

export const CardValue = styled.h2`
    font-family: 'Inter', sans-serif;
    font-size: 26px;
    color: white;
    font-weight: bold;

    @media (max-width: 968px) {
        font-size: 26px;
    }
`   