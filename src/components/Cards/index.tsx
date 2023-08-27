import * as C from './style'

import { FaUserFriends } from 'react-icons/fa';
import { AiFillCreditCard } from 'react-icons/ai';
import { BsCalendar3 } from 'react-icons/bs';
import { PiFlagBannerFill } from 'react-icons/pi';

export const Cards = () => {
    return (
        <C.CardContainer>
            <C.Card>
                <C.CardText>
                    <FaUserFriends color={"9CA3AF"} size={40}/>
                    Staff Users
                </C.CardText>
                <C.CardValue>14</C.CardValue>
            </C.Card>
            <C.Card>
                <C.CardText>
                    <AiFillCreditCard color={"9CA3AF"} size={30}/>
                    Total in Sales
                </C.CardText>
                <C.CardValue>200.000 EUR</C.CardValue>
                <C.CardFooter>All Time</C.CardFooter>
            </C.Card>
            <C.Card>
                <C.CardText>
                    <BsCalendar3 color={"9CA3AF"} size={25}/>
                    Total in Sales
                </C.CardText>
                <C.CardValue>200.000 EUR</C.CardValue>
                <C.CardFooter>Current Month</C.CardFooter>
            </C.Card>
            <C.Card>
                <C.CardText>
                    <PiFlagBannerFill color={"9CA3AF"} size={30}/>
                    Average Payment
                </C.CardText>
                <C.CardValue>13 EUR</C.CardValue>
                <C.CardFooter>Current Month</C.CardFooter>
            </C.Card>
        </C.CardContainer>
    )
}