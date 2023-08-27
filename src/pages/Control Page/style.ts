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