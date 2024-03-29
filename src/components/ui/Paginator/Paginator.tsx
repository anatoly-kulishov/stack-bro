import React, { FC } from 'react';
import { Pagination } from 'antd';

import { IPaginator } from './Paginator.props';

export const Paginator: FC<IPaginator> = props => {
  const { currentPage, totalUsersCount, pageSize, onPageChanged } = props;
  const pagesCount: number = Math.ceil(totalUsersCount / pageSize);
  const pages: number[] = [];

  // eslint-disable-next-line no-plusplus
  for (let i: number = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const onChange = (pageNumber: number) => onPageChanged(pageNumber);
  return (
    <Pagination
      defaultCurrent={currentPage}
      total={pages.length}
      onChange={onChange}
      disabled={totalUsersCount === 0}
      showSizeChanger={false}
    />
  );
};
