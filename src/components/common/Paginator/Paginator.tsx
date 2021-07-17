import React, {FC} from 'react';
import {Pagination} from "antd";

type PaginatorPropsType = {
    currentPage: number,
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void
}

const Paginator: FC<PaginatorPropsType> = props => {
    const {currentPage, totalUsersCount, pageSize, onPageChanged} = props;
    let pagesCount: number = Math.ceil(totalUsersCount / pageSize);
    let pages: number[] = [];
    for (let i: number = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const onChange = (p: number) => onPageChanged(p);
    return <Pagination defaultCurrent={currentPage} total={pages.length} onChange={onChange}
                       disabled={totalUsersCount === 0}/>

};

export default Paginator;
