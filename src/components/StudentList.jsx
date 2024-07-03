import { useState, useEffect } from "react";
import React from "react";
import { getStudents, getStudentSubjects } from "../services/api";
import Pagination from "./Pagination";
import SortSelect from "./SortSelect";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState("estudiante_code");
  const [sortDirection, setSortDirection] = useState("asc");
  const [subjects, setSubjects] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await getStudents(
          pageNumber,
          pageSize,
          sortBy,
          sortDirection
        );
        setStudents(response.data); // Ensure that response.data is the correct path to your students array
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();
  }, [pageNumber, pageSize, sortBy, sortDirection]);

  const handleViewSubjects = async (studentId) => {
    if (selectedStudentId === studentId) {
      setSelectedStudentId(null);
      setSubjects([]);
    } else {
      try {
        const response = await getStudentSubjects(studentId);
        console.log("Received subjects:", response.data);
        setSubjects(response.data);
        setSelectedStudentId(studentId); // Store selected student ID
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    }
  };

  return (
    <div>
      <h1 className="p-6 font-bold dark:text-white text-3xl text-center uppercase">
        Student List
      </h1>
      <div className="flex flex-col items-center">
        <SortSelect
          setSortBy={setSortBy}
          setSortDirection={setSortDirection}
          list="Students"
        />
        <div className="overflow-x-auto m-4 w-auto rounded-xl">
          <table className="table-auto w-full">
            <thead className="border-b">
              <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
                <th className="text-center p-4 font-semibold">Id</th>
                <th className="text-center p-4 font-semibold">Nombre</th>
                <th className="text-center p-4 font-semibold">Apellido</th>
                <th className="text-center p-4 font-semibold">Tipo de Doc.</th>
                <th className="text-center p-4 font-semibold">Document</th>
                <th className="text-center p-4 font-semibold">Estado</th>
                <th className="text-center p-4 font-semibold">Programa</th>
                <th className="text-center p-4 font-semibold">Materias</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <React.Fragment key={student.estudiante_id}>
                  <tr
                    key={student.estudiante_id}
                    className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/80 dark:text-white"
                  >
                    <td className="text-center p-4">{student.estudiante_id}</td>
                    <td className="text-center p-4">
                      {student.estudiante_name}
                    </td>
                    <td className="text-center p-4">
                      {student.estudiante_last_name}
                    </td>
                    <td className="text-center p-4">
                      {student.estudiante_type_doc}
                    </td>
                    <td className="text-center p-4">
                      {student.estudiante_document}
                    </td>
                    <td className="text-center p-4">
                      {student.estudiante_status}
                    </td>
                    <td className="text-center p-4">
                      {student.estudiante_programa_fk}
                    </td>
                    <td className="text-center p-4">
                      <button
                        className="px-2 py-1 text-white bg-rose-500 rounded-lg shadow-md shadow-rose-500"
                        onClick={() => handleViewSubjects(student.student_id)}
                      >
                        Ver materias
                      </button>
                    </td>
                  </tr>
                  {selectedStudentId === student.student_id && (
                    <tr>
                      <td colSpan="4">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white rounded-b-lg">
                              <th className="font-medium p-3">Subject ID</th>
                              <th className="font-medium p-3">Nombre</th>
                              <th className="font-medium p-3">Aula</th>
                              <th className="font-medium p-3">Créditos</th>
                            </tr>
                          </thead>
                          <tbody className="bg-gray-50 dark:bg-gray-800/40">
                            {subjects.map((subject) => (
                              <tr
                                className="pt-5 text-center border-b hover:bg-gray-100 dark:hover:bg-gray-900/60 dark:text-white"
                                key={subject.subject_id}
                              >
                                <td className="p-2">{subject.subject_id}</td>
                                <td className="p-2">{subject.nombre}</td>
                                <td className="p-2">{subject.aula}</td>
                                <td className="p-2">{subject.creditos}</td>
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
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </div>
    </div>
  );
};

export default StudentList;
