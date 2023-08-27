import * as C from './style';
import { FaHouseUser } from 'react-icons/fa';
import { NavLocation } from '../../components/NavLocation';
import { Cards } from '../../components/Cards';
import { Table } from '../../components/Table';

export const ControlPage = () => {
    return (
        <C.Container>
            <C.Content>
                <NavLocation
                    icon={<FaHouseUser color={"9CA3AF"} size={15}/>}
                    position={["Control Panel", "DashBoard"]}
                />
                <Cards/>
                <Table/>
            </C.Content>
        </C.Container>
    )
}