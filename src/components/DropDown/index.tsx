import { useState, ReactElement, ReactNode} from 'react';
import * as C from './style';

import { BiChevronDown, BiChevronRight } from 'react-icons/bi'

interface DropDownProps {
    title: string;
    icon: ReactElement,
    children: ReactNode
}

export const DropDown = ({title, icon, children} :DropDownProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <C.Container>
            <C.Content>
                <C.DropDownListItem
                    onClick={() => {
                        setIsOpen(!isOpen)
                    }}
                >
                    {icon}
                    {title}
                </C.DropDownListItem>

                <C.Arrow
                    key={isOpen ? 'open' : 'closed'}
                    isOpen={isOpen}
                    onClick={() => {
                        setIsOpen(!isOpen)
                    }}
                >
                    {isOpen ? <BiChevronDown size={30} color={"white"}/> : <BiChevronRight size={30} color={"white"}/>}
                </C.Arrow>
            </C.Content>
            {isOpen && (
                <>
                    {children}
                </>
            )}

        </C.Container>
    )
}