import * as C from './style';
import { useState } from 'react';
import { FaHouseUser, FaUserEdit } from 'react-icons/fa';
import { MdFunctions } from 'react-icons/md';
import { MdOutlineScience } from 'react-icons/md';
import { DropDown } from '../DropDown';

export const SideBar = () => {
    const [active, setActive] = useState(0);

    return (
        <C.Container>
            <C.SideBarTitle>CoralMC</C.SideBarTitle>
            <C.SideBarList>
                <C.SideBarListItem 
                    active={active == 0 ? true : false}
                    onClick={() => {
                        setActive(0);
                    }}
                >
                    <FaHouseUser color={"9CA3AF"} size={17}/>
                    Control Panel
                </C.SideBarListItem>
                <C.SideBarListItem 
                    active={active == 1 ? true : false}
                    onClick={() => {
                        setActive(1);
                    }}
                >
                    <MdFunctions color={"9CA3AF"} size={17}/>
                    Variables
                </C.SideBarListItem>
                <DropDown
                    icon={<MdOutlineScience color={"9CA3AF"} size={17}/>}
                    title='Settings'
                >
                    <C.SideBarListItem 
                        dropdown={true}
                        active={active == 2 ? true : false}
                        onClick={() => {
                            setActive(2);
                        }}
                    >
                        <FaUserEdit color={"9CA3AF"} size={17}/>
                        Accounts
                    </C.SideBarListItem>
                </DropDown>
            </C.SideBarList>
        </C.Container>
    )
}