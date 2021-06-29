import React from 'react';
import {Pagination} from "antd";
import {PaginatorType} from "../../../types";

const Paginator: React.FC<PaginatorType> = props => {
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