"use client";

import ReactPaginate from "react-paginate";

import { useAppSelector } from "@/redux/hooks";

const Paginator = ({
  currentPage,
  setCurrentPage,
}: {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  
  const paginationResult = useAppSelector(
    (state) => state.products.paginationResult
  );

  const handlePageClick = (e: { selected: number }) => {
    setCurrentPage(e.selected + 1);
  };

  return (
    <>
      <ReactPaginate
        className=" flex justify-center gap-2 my-10 text-sm"
        previousLabel="previous"
        previousLinkClassName=" px-4 py-2 bg-customRed-900 text-white rounded-sm"
        pageLinkClassName=" px-4 py-2 bg-grayscale-500 text-grayscale-700 rounded-sm"
        breakLabel="..."
        breakLinkClassName=" px-4 py-2 bg-grayscale-500 text-customRed-900 rounded-sm"
        nextLabel="next"
        activeLinkClassName=" px-4 py-2 !bg-customRed-900 text-white rounded-sm"
        nextLinkClassName=" px-4 py-2 bg-customRed-900 text-white rounded-sm"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={paginationResult.numberOfPages}
        marginPagesDisplayed={1}
        renderOnZeroPageCount={null}
        initialPage={currentPage - 1}
      />
    </>
  );
};

export default Paginator;
