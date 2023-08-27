import { ReactElement } from 'react';
import * as C from './style';

interface Props {
    icon: ReactElement;
    text: String;
    color: string;
}

export const Badge = ({ icon, text, color }: Props) => {
    return (
        <C.Container color={color}>
            {icon}
            <C.Text>{text}</C.Text>
        </C.Container>
    )
};