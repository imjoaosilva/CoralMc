import styled from "styled-components";

export const Container = styled.div`
    width: 320px;
    background-color: #1F2A37;
    height: 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-bottom: 30px;

    @media (max-width: 688px) {
        display: none;
    }
`

export const Text = styled.p`
    font-size: 12px;
    font-family: 'Inter', sans-serif;
    color: #fff;
    color: #9CA3AF;
    text-wrap: nowrap;
`