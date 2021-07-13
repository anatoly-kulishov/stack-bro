import React, {FC} from 'react';
import {Pagination} from "antd";

type PaginatorPropsType = {
    currentPage: number,
    totalUsersCount: number,
    pageSize: number,
    setCurrentPage: (pageNumber: number) => void
}

const Paginator: FC<PaginatorPropsType> = props => {
    const {currentPage, totalUsersCount, pageSize, setCurrentPage} = props;
    let pagesCount: number = Math.ceil(totalUsersCount / pageSize);
    let pages: number[] = [];
    for (let i: number = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const onPageChanged = (p: number) => setCurrentPage(p);
    return <Pagination defaultCurrent={currentPage} total={pages.length} onChange={onPageChanged}/>

};

export default Paginator;