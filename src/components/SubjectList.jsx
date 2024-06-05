import { useState, useEffect } from "react";
import React from "react";
import { getSubjects, getSubjectStudents } from "../services/api";
import Pagination from "./Pagination";
import SortSelect from "./SortSelect";

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState("subject_id");
  const [sortDirection, setSortDirection] = useState("asc");
  const [students, setStudents] = useState([]);
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await getSubjects(
          pageNumber,
          pageSize,
          sortBy,
          sortDirection
        );
        setSubjects(response.data); // Ensure that response.data is the correct path to your students array
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };
    fetchSubjects();
  }, [pageNumber, pageSize, sortBy, sortDirection]);

  const handleViewStudents = async (subjectId) => {
    if (selectedSubjectId === subjectId) {
      setSelectedSubjectId(null);
      setStudents([]);
    } else {
      try {
        const response = await getSubjectStudents(subjectId);
        console.log("Received students:", response.data);
        setStudents(response.data);
        setSelectedSubjectId(subjectId); // Store selected student ID
      } catch (error) {
        console.error("Error fetching students:", error);
      }
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
                <th className="text-center p-4 font-medium">Nombre</th>
                <th className="text-center p-4 font-medium">Aula</th>
                <th className="text-center p-4 font-medium">Creditos</th>
                <th className="text-center p-4 font-medium">Estudiantes</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject) => (
                <React.Fragment key={subject.subject_id}>
                  <tr
                    key={subject.subject_id}
                    className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/80 dark:text-white"
                  >
                    <td className="p-4">{subject.subject_id}</td>
                    <td className="p-4">{subject.nombre}</td>
                    <td className="p-4">{subject.aula}</td>
                    <td className="p-4">{subject.creditos}</td>
                    <td className="p-4">
                      <button
                        onClick={() => handleViewStudents(subject.subject_id)}
                        className="px-2 py-1 text-white bg-rose-500 rounded-lg shadow-md shadow-rose-500"
                      >
                        Ver estudiantes
                      </button>
                    </td>
                  </tr>
                  {selectedSubjectId === subject.subject_id && (
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
                                key={student.student_id}
                              >
                                <td className="p-2">{student.student_id}</td>
                                <td className="p-2">{student.nombre}</td>
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

export default SubjectList;
