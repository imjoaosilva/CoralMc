import * as C from './style';

import { AiOutlineRight } from 'react-icons/ai';

interface Props {
    icon: any;
    position: Array<String>;
}

export const NavLocation = ({icon, position}: Props) => {
    return (
        <C.Container>
            {icon}
            <C.Text>{position[0]}</C.Text>
            <AiOutlineRight color={"9CA3AF"} size={11}/>
            <C.Text>{position[1]}</C.Text>
        </C.Container>
    )

}