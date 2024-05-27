import { useState, useEffect } from "react";
import { getStudents } from "../services/api";
import Pagination from "./Pagination";
import SortSelect from "./SortSelect";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState("nombre");
  const [sortDirection, setSortDirection] = useState("desc");

  useEffect(() => {
    fetchStudents();
  }, [pageNumber, pageSize, sortBy, sortDirection]);

  const fetchStudents = async () => {
    try {
      const response = await getStudents(
        pageNumber,
        pageSize,
        sortBy,
        sortDirection
      );
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  return (
    <div>
      <h1 className="p-6 font-bold dark:text-white text-3xl text-center uppercase">
        Student List
      </h1>
      <div className="flex flex-col items-center">
        <SortSelect setSortBy={setSortBy} setSortDirection={setSortDirection} />
        <div className="overflow-x-auto m-4 w-auto rounded-xl">
          <table className="table-auto w-full ">
            <thead className="border-b">
              <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
                <th className="text-center p-4 font-medium">Id</th>
                <th className="text-center p-4 font-medium">Name</th>
                <th className="text-center p-4 font-medium">Last name</th>
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

export default StudentList;

/* <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Document Number</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.student_id}>
                <td>{student.student_id}</td>
                <td>{student.nombre}</td>
                <td>{student.apellido}</td>
                <td>{student.numero_identificacion}</td>
              </tr>
            ))}
          </tbody>
        </table> */
