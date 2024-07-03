import { useState, useEffect } from "react";
import React from "react";
import { getGroups, getSubjectStudents } from "../services/api";
import Pagination from "./Pagination";
import SortSelect from "./SortSelect";

const GroupList = () => {
  const [Groups, setGroups] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState("grupo_id");
  const [sortDirection, setSortDirection] = useState("asc");
  const [students, setStudents] = useState([]);
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await getGroups(
          pageNumber,
          pageSize,
          sortBy,
          sortDirection
        );
        setGroups(response.data); // Ensure that response.data is the correct path to your students array
      } catch (error) {
        console.error("Error fetching Groups:", error);
      }
    };
    fetchGroups();
  }, [pageNumber, pageSize, sortBy, sortDirection]);

  const handleViewStudents = async (groupId) => {
    if (selectedSubjectId === groupId) {
      setSelectedSubjectId(null);
      setStudents([]);
    } else {
      try {
        const response = await getSubjectStudents(groupId);
        console.log("Received students:", response.data);
        setStudents(response.data);
        setSelectedSubjectId(groupId); // Store selected student ID
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    }
  };

  return (
    <div>
      <h1 className="p-6 font-bold dark:text-white text-3xl text-center uppercase">
        Groups List
      </h1>
      <div className="flex flex-col items-center">
        <SortSelect setSortBy={setSortBy} setSortDirection={setSortDirection} />
        <div className="overflow-x-auto m-4 w-auto rounded-xl">
          <table className="table-auto w-full ">
            <thead className="border-b">
              <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
                <th className="text-center p-4 font-medium">Id</th>
                <th className="text-center p-4 font-medium">Asignatura</th>
                <th className="text-center p-4 font-medium">Nombre</th>
                <th className="text-center p-4 font-medium">Aula</th>
                <th className="text-center p-4 font-medium">Creditos</th>
                <th className="text-center p-4 font-medium">cupos</th>
                <th className="text-center p-4 font-medium">Estudiantes</th>
              </tr>
            </thead>
            <tbody>
              {Groups.map((group) => (
                <React.Fragment key={group.grupo_id}>
                  <tr
                    key={group.grupo_id}
                    className="border-b text-center hover:bg-gray-50 dark:hover:bg-gray-800/80 dark:text-white"
                  >
                    <td className="p-4">{group.grupo_id}</td>
                    <td className="p-4">{group.asignatura_fk}</td>
                    <td className="p-4">{group.grupo_name}</td>
                    <td className="p-4">{group.grupo_classroom}</td>
                    <td className="p-4">{group.grupo_credits}</td>
                    <td className="p-4">{group.grupo_quotas}</td>
                    <td className="p-4">
                      <button
                        onClick={() => handleViewStudents(group.grupo_id)}
                        className="px-2 py-1 text-white bg-rose-500 rounded-lg shadow-md shadow-rose-500"
                      >
                        Ver estudiantes
                      </button>
                    </td>
                  </tr>
                  {selectedSubjectId === group.grupo_id && (
                    <tr>
                      <td colSpan="4">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white rounded-b-lg">
                              <th className="font-medium p-3">Student ID</th>
                              <th className="font-medium p-3">Nombre</th>
                              <th className="font-medium p-3">Documento</th>
                            </tr>
                          </thead>
                          <tbody className="bg-gray-50 dark:bg-gray-800/40">
                            {students.map((student) => (
                              <tr
                                className="pt-5 text-center border-b hover:bg-gray-100 dark:hover:bg-gray-900/60 dark:text-white"
                                key={student.estudiante_id}
                              >
                                <td className="p-2">{student.estudiante_id}</td>
                                <td className="p-2">
                                  {student.estudiante_name}
                                </td>
                                <td className="p-2">
                                  {student.estudiante_last_name}
                                </td>
                                <td className="p-2">{student.type_doc}</td>
                                <td className="p-2">
                                  {student.numero_identificacion}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
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

export default GroupList;
