import * as C from './style';

import { NavLocation } from '../../components/NavLocation';
import { FaHouseUser } from 'react-icons/fa';

export const ControlPage = () => {
    return (
        <C.Container>
            <C.Content>
                <NavLocation
                    icon={<FaHouseUser color={"9CA3AF"} size={15}/>}
                    position={["Control Panel", "DashBoard"]}
                />
                <C.CardContainer>
                    <C.Card>
                        ...
                    </C.Card>
                    <C.Card>
                        ...
                    </C.Card>
                    <C.Card>
                        ...
                    </C.Card>
                    <C.Card>
                        ...
                    </C.Card>
                </C.CardContainer>
            </C.Content>
        </C.Container>
    )
}