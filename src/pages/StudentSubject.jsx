import SideBar from "../components/SideBar";
import { useState, useEffect } from "react";
import { getStudentSubjects } from "../services/api";

const StudentSubject = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await getStudentSubjects(4);
        setSubjects(response.data); // Ensure that response.data is the correct path to your students array
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className=" p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div>
            <h1 className="p-6 font-bold dark:text-white text-3xl text-center uppercase">
              Materias
            </h1>
            <div className="flex flex-col items-center w-full">
              <div className="overflow-x-auto m-4 w-full rounded-xl">
                <table className="table-auto w-full">
                  <thead className="border-b">
                    <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
                      <th className="text-center p-4 font-medium">Id</th>
                      <th className="text-center p-4 font-medium">Materia</th>
                      <th className="text-center p-4 font-medium">Grupo</th>
                      <th className="text-center p-4 font-medium">Aula</th>
                      <th className="text-center p-4 font-medium">Creditos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.map((subject) => (
                      <tr
                        className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/80 dark:text-white"
                        key={subject.grupo_id}
                      >
                        <td className="p-4 text-center">{subject.grupo_id}</td>
                        <td className="p-4 text-center">
                          {subject.asignatura_fk}
                        </td>
                        <td className="p-4 text-center">
                          {subject.grupo_name}
                        </td>
                        <td className="p-4 text-center">
                          {subject.grupo_classroom}
                        </td>
                        <td className="p-4 text-center">
                          {subject.grupo_credits}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSubject;
