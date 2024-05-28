import { useState, useEffect } from "react";
import { getStudents, getStudentSubjects } from '../services/api';  
import Pagination from "./Pagination";
import SortSelect from "./SortSelect";
import SubjectModal from "./SubjectModal";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState("student_id");
  const [sortDirection, setSortDirection] = useState("asc");
  const [subjects, setSubjects] = useState([]);
  const [showSubjects, setShowSubjects] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await getStudents(pageNumber, pageSize, sortBy, sortDirection);
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
        console.error('Error fetching subjects:', error);
      }
    }
  };

  return (
    <div>
      <h1 className="p-6 font-bold dark:text-white text-3xl text-center uppercase">Student List</h1>
      <div className="flex flex-col items-center">
        <SortSelect setSortBy={setSortBy} setSortDirection={setSortDirection} />
        <div className="overflow-x-auto m-4 w-auto rounded-xl">
          <table className="table-auto w-full">
            <thead className="border-b">
              <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
                <th className="text-center p-4 font-medium">Id</th>
                <th className="text-center p-4 font-medium">Nombre</th>
                <th className="text-center p-4 font-medium">Document</th>
                <th className="text-center p-4 font-medium">Materias</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <>
                  <tr key={student.student_id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/80 dark:text-white">
                    <td className="text-center p-4">{student.student_id}</td>
                    <td className="text-center p-4">{student.nombre}</td>
                    <td className="text-center p-4">{student.numero_identificacion}</td>
                    <td className="text-center p-4">
                      <button className="px-2 py-1 text-white bg-rose-500 rounded-lg shadow-md shadow-rose-500" onClick={() => handleViewSubjects(student.student_id)}>
                        Ver materias
                      </button>
                    </td>
                  </tr>
                  {selectedStudentId === student.student_id && (
                    <tr>
                      <td colSpan="4">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-gray-200">
                              <th>Subject ID</th>
                              <th>Nombre</th>
                              <th>Aula</th>
                              <th>Créditos</th>
                            </tr>
                          </thead>
                          <tbody>
                            {subjects.map(subject => (
                              <tr key={subject.subject_id}>
                                <td>{subject.subject_id}</td>
                                <td>{subject.nombre}</td>
                                <td>{subject.aula}</td>
                                <td>{subject.creditos}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} pageSize={pageSize} setPageSize={setPageSize} />
      </div>
    </div>
  );
};

export default StudentList;
