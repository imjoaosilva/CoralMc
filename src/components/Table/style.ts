import styled from "styled-components";

export const Table = styled.table`
    background-color: #374151;
    margin-top: 20px;
    width: 100%;
    border-collapse: collapse;
    border-radius: 5px 5px 0px 0px;
`

export const TableHeader = styled.thead`
    color: #fff;
    text-align: left;
    color: white;
    height: 40px;
    width: 100%;
`

export const TableHeaderItem = styled.th`
    font-family: 'Inter', sans-serif;
    padding: 0px 8px;
    font-size: 12px;
`

export const TableBody = styled.tbody`
    .date {
        color:#9CA3AF;
    }
`

export const TableBodyRow = styled.tr`
    background-color: #1F2A37;
    width: 100%;

    
    &:last-child {
        td {
            border-bottom: none;
        }
    }
    
`

export const TableBodyItem = styled.td`
    border-bottom: 0.5px solid rgba(38,48,62,0.1);
    height: 40px;
    font-family: 'Inter', sans-serif;
    padding: 0px 8px;
    font-size: 12px;
    color: #fff;
    opacity: 0.8;
`