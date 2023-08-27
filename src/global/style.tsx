import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;

    @media (max-width: 688px) {
        flex-direction: column;
        
    }
`;