import { useState, useEffect } from "react";
//import { getStudents } from "../services/api";
import Pagination from "./Pagination";
import SortSelect from "./SortSelect";

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState("nombre");
  const [sortDirection, setSortDirection] = useState("desc");

  useEffect(() => {
    fetchSubjects();
  }, [pageNumber, pageSize, sortBy, sortDirection]);

  const fetchSubjects = async () => {
    try {
      const response = await getSubjects(
        pageNumber,
        pageSize,
        sortBy,
        sortDirection
      );
      setSubjects(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  return (
    <div>
      <h1 className="p-6 font-bold dark:text-white text-3xl text-center uppercase">
        Subject List
      </h1>
      <div className="flex flex-col items-center">
        <SortSelect setSortBy={setSortBy} setSortDirection={setSortDirection} />
        <div className="overflow-x-auto m-4 w-auto rounded-xl">
          <table className="table-auto w-full ">
            <thead className="border-b">
              <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
                <th className="text-center p-4 font-medium">Id</th>
                <th className="text-center p-4 font-medium">Name</th>
                <th className="text-center p-4 font-medium">Document</th>
                <th className="text-center p-4 font-medium">Materias</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/80 dark:text-white">
                <td className="p-4">13549</td>
                <td className="p-4">Jaime</td>
                <td className="p-4">Galvis</td>
                <td className="p-4">100164621</td>
                <td className="p-4">
                  <button className="px-2 py-1 text-white bg-rose-500 rounded-lg shadow-md shadow-rose-500">
                    Ver materias
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination
          setPageNumber={setPageNumber}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </div>
    </div>
  );
};

export default SubjectList;
