import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Pagination = ({ setPageNumber, pageSize, setPageSize }) => {
  //const handlePageChange = (event) => {
  //    setPageNumber(Number(event.target.value));
  //};

  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);

  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ];

  const handlePageSizeChange = (event) => {
    setPageSize(Number(event.target.value));
  };

  function Next() {
    setNum(++num);
  }
  function Back() {
    num > 1 && setNum(--num);
  }

  return (
    <div>
      <div className="flex bg-gray-100 dark:bg-gray-800 max-w-lg p-2 rounded-lg">
        <button
          onClick={Back}
          className={`h-10 w-10 rounded-xl hover:bg-gray-300/50 dark:text-white`}
        >
          <BiChevronLeft className="m-auto" />
        </button>
        {pages.map((pg, i) => {
          return (
            <button
              onClick={() => setCur(pg.page)}
              key={i}
              className={`h-10 w-10 ml-2 font-semibold rounded-xl dark:text-white hover:bg-gray-300/50 ${
                cur === pg.page &&
                "bg-rose-500 dark:bg shadow-md shadow-rose-500/50 hover:bg-rose-500/100 text-white"
              }`}
            >
              {pg.page}
            </button>
          );
        })}
        <button
          onClick={Next}
          className="h-10 w-10 ml-2 rounded-xl hover:bg-gray-300/50 dark:text-white"
        >
          <BiChevronRight className="m-auto" />
        </button>
        <div className="ml-6 flex items-center">
          <label className="font-medium dark:text-white">
            Page Size:
            <input
              type="number"
              value={pageSize}
              onChange={handlePageSizeChange}
              min="1"
              className="w-[70px] ml-2 rounded-lg font-normal text-center dark:bg-[#1a2330] dark:text-white"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
