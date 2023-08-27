import * as C from './style';

import { Badge } from '../Badge';
import { AiFillCheckCircle, AiFillClockCircle } from 'react-icons/ai';

export const Table = () => {
    const TableValues = [
        {
            id: 1331,
            username: "Lafa",
            date: "May 20, 2023 10:12:15",
            amount: "120$",
            status: <Badge
                color={"#10B981"}
                text={"Completed"}
                icon={<AiFillCheckCircle color={"10B981"} size={14}/>}
            />
        },
        {
            id: 1331,
            username: "Z4",
            date: "May 15, 2023 10:12:25",
            amount: "120$",
            status: <Badge
                color={"#E9BF1A"}
                text={"Pending"}
                icon={<AiFillClockCircle color={"E9BF1A"} size={14}/>}
            />
        },
        {
            id: 1331,
            username: "Z4",
            date: "May 15, 2023 10:12:25",
            amount: "120$",
            status: <Badge
                color={"#E9BF1A"}
                text={"Pending"}
                icon={<AiFillClockCircle color={"E9BF1A"} size={14}/>}
            />
        },
        {
            id: 1331,
            username: "Z4",
            date: "May 15, 2023 10:12:25",
            amount: "120$",
            status: <Badge
                color={"#E9BF1A"}
                text={"Pending"}
                icon={<AiFillClockCircle color={"E9BF1A"} size={14}/>}
            />
        },
        {
            id: 1331,
            username: "Z4",
            date: "May 15, 2023 10:12:25",
            amount: "120$",
            status: <Badge
                color={"#E9BF1A"}
                text={"Pending"}
                icon={<AiFillClockCircle color={"E9BF1A"} size={14}/>}
            />
        },
        {
            id: 1331,
            username: "Z4",
            date: "May 15, 2023 10:12:25",
            amount: "120$",
            status: <Badge
                color={"#E9BF1A"}
                text={"Pending"}
                icon={<AiFillClockCircle color={"E9BF1A"} size={14}/>}
            />
        },
        {
            id: 1331,
            username: "Z4",
            date: "May 15, 2023 10:12:25",
            amount: "120$",
            status: <Badge
                color={"#E9BF1A"}
                text={"Pending"}
                icon={<AiFillClockCircle color={"E9BF1A"} size={14}/>}
            />
        },
    ]

    return (
        <C.Container>
            <C.Table>
                <C.TableHeader>
                    <C.TableHeaderItem>
                        ID
                    </C.TableHeaderItem>
                    <C.TableHeaderItem>
                        USERNAME
                    </C.TableHeaderItem>
                    <C.TableHeaderItem>
                        DATE & TIME
                    </C.TableHeaderItem>
                    <C.TableHeaderItem>
                        AMOUNT
                    </C.TableHeaderItem>
                    <C.TableHeaderItem>
                        STATUS
                    </C.TableHeaderItem>    
                </C.TableHeader>
                <C.TableBody>
                    {TableValues.map((item, index) => (
                        <C.TableBodyRow key={index}>
                            <C.TableBodyItem>
                                {item.id}
                            </C.TableBodyItem>
                            <C.TableBodyItem>
                                {item.username}
                            </C.TableBodyItem>
                            <C.TableBodyItem className='date'>
                                {item.date}
                            </C.TableBodyItem>
                            <C.TableBodyItem>
                                {item.amount}
                            </C.TableBodyItem>
                            <C.TableBodyItem>
                                {item.status}
                            </C.TableBodyItem>
                        </C.TableBodyRow>
                    ))}
                </C.TableBody>
            </C.Table>
        </C.Container>
    )
}