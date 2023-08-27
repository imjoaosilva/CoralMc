import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #111827;
`;

export const Content = styled.div`
    padding: 40px;
`

export const CardContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`

export const Card = styled.div`
    width: 370px;
    background-color: #1F2A37;
    height: 150px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    gap: 15px;
    flex-direction: column;
    outline: 1px solid #2A3342;
`