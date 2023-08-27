import * as C from './style';
import { FaHouseUser } from 'react-icons/fa';
import { NavLocation } from '../../components/NavLocation';
import { Cards } from '../../components/Cards';

export const ControlPage = () => {
    return (
        <C.Container>
            <C.Content>
                <NavLocation
                    icon={<FaHouseUser color={"9CA3AF"} size={15}/>}
                    position={["Control Panel", "DashBoard"]}
                />
                <Cards/>
            </C.Content>
        </C.Container>
    )
}