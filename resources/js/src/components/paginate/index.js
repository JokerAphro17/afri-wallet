import React from 'react';
import ReactPaginate from "react-paginate";
import { getNumberPage } from '../../utilities/helper';

const PaginationPage = (props) => {
    const {currentPage, totalPage, isLoading, onPageChange} = props

    return (
        <ReactPaginate
            previousLabel={<i className="zmdi zmdi-chevron-left"></i>}
            nextLabel={<i className="zmdi zmdi-chevron-right"></i>}
            breakLabel="..."
            pageCount={totalPage || 1}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            activeClassName="active"
            forcePage={currentPage !== 0 ? currentPage - 1 : 0}
            progressPending={isLoading ?? false}
            onPageChange={onPageChange}
            pageClassName={"page-item"}
            nextLinkClassName={"page-link"}
            nextClassName={"page-item next"}
            previousClassName={"page-item prev"}
            previousLinkClassName={"page-link"}
            pageLinkClassName={"page-link"}
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName={
                "pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"
            }
        />
    );
};

export default PaginationPage;
