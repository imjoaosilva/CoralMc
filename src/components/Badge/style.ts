import styled from 'styled-components';

interface BadgeProps {
    type?: string;
}

export const Container = styled.div<BadgeProps>`
    width: 90px;
    height: 22px;
    display: flex;
    align-items: center;
    background-color: #374151;
    border: 1px solid ${props => props.color ?? '#374151'};
    gap: 5px;
    border-radius: 5px;
    padding: 5px;
    text-wrap: wrap;
    white-space: nowrap;

    p {
        color: ${props => props.color ?? '#374151'};
    }
`;

export const Text = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 12px;
`