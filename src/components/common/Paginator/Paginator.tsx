import React from 'react';
import {Pagination} from "antd";
import {IPaginator} from "../../../interfaces";

const Paginator: React.FC<IPaginator> = props => {
    const {currentPage, totalUsersCount, pageSize, setCurrentPage} = props;
    let pagesCount: number = Math.ceil(totalUsersCount / pageSize);
    let pages: number[] = [];
    for (let i: number = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const onPageChanged = (p: any) => setCurrentPage(p);
    return <Pagination defaultCurrent={currentPage} total={pages.length} onChange={onPageChanged}/>

};

export default Paginator;