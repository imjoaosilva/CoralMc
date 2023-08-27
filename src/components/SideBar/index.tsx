import * as C from './style';
import { useState } from 'react';

import { FaHouseUser, FaUserEdit } from 'react-icons/fa';
import { MdFunctions, MdOutlineScience } from 'react-icons/md';
import { DropDown } from '../DropDown';
import { ImTicket } from 'react-icons/im';
import { BsDatabaseFillAdd, BsGlobe2 } from 'react-icons/bs';
import { HiDesktopComputer, HiOutlineDocumentSearch } from 'react-icons/hi'; 
import { TbSitemap } from 'react-icons/tb';
import { AiOutlineLink } from 'react-icons/ai';

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
                        active={active == 2 ? true : false}
                        onClick={() => {
                            setActive(2);
                        }}
                    >
                        <FaUserEdit color={"9CA3AF"} size={17}/>
                        Accounts
                    </C.SideBarListItem>
                </DropDown>
                <DropDown
                    icon={<ImTicket color={"9CA3AF"} size={17}/>}
                    title='Discounts'
                >
                    <C.SideBarListItem 
                        active={active == 3 ? true : false}
                        onClick={() => {
                            setActive(3);
                        }}
                    >
                        <BsDatabaseFillAdd color={"9CA3AF"} size={17}/>
                        New Discount
                    </C.SideBarListItem>
                </DropDown>
                <DropDown
                    icon={<HiDesktopComputer color={"9CA3AF"} size={17}/>}
                    title='Pages & CMS'
                >
                    <C.SideBarListItem 
                        active={active == 4 ? true : false}
                        onClick={() => {
                            setActive(4);
                        }}
                    >
                        <TbSitemap color={"9CA3AF"} size={17}/>
                        New Page
                    </C.SideBarListItem>
                </DropDown>
            </C.SideBarList>

            <C.Separator/>

            <C.SideBarList>
                <C.SideBarListItem 
                    active={active == 5 ? true : false}
                    onClick={() => {
                        setActive(5);
                    }}
                >
                    <HiOutlineDocumentSearch color={"9CA3AF"} size={17}/>
                    Docs
                </C.SideBarListItem>
                <C.SideBarListItem 
                    active={active == 6 ? true : false}
                    onClick={() => {
                        setActive(6);
                    }}
                >
                    <AiOutlineLink color={"9CA3AF"} size={17}/>
                    Dashboard
                </C.SideBarListItem>
                <C.SideBarListItem 
                    active={active == 7 ? true : false}
                    onClick={() => {
                        setActive(7);
                    }}
                >
                    <BsGlobe2 color={"9CA3AF"} size={17}/>
                    Help
                </C.SideBarListItem>
            </C.SideBarList>
        </C.Container>
    )
}