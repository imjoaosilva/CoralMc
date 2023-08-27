import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`

export const Card = styled.div`
    width: 320px;
    background-color: #1F2A37;
    height: 150px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 30px;
    flex-direction: column;
    outline: 1px solid #2A3342;
`

export const CardText = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 27px;
    color: #D0D2D5;
    display: flex;
    align-items: center;
    gap: 10px;
    text-wrap: nowrap;
`

export const CardValue = styled.h2`
    font-family: 'Inter', sans-serif;
    font-size: 36px;
    color: white;
    font-weight: bold;
`

export const CardFooter = styled.p`
    margin-top: 4px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #9CA3AF;
    font-weight: semi-bold;
`