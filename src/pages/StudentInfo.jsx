import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { getStudentInfo, getProgramInfo } from "../services/api";

const StudentInfo = () => {
  const [student, setStudent] = useState({});
  const [program, setProgram] = useState({});

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await getStudentInfo(13);
        setStudent(response.data); // Ensure that response.data is the correct path to your students array
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };
    fetchStudents();
  }, []);

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const response = await getProgramInfo(student.estudiante_programa_fk);
        setProgram(response.data); // Ensure that response.data is the correct path to your students array
      } catch (error) {
        console.error("Error fetching programa:", error);
      }
    };
    fetchProgram();
  });

  const personalData = {
    Nombres: student.estudiante_name,
    Apellidos: student.estudiante_last_name,
    Código: student.estudiante_code,
    Documento: student.estudiante_document,
    "Estado Académico": student.estudiante_status,
    "Tipo Documento": student.estudiante_type_doc,
  };

  const programData = {
    "Nombre Programa": program.programa_name,
    Código: program.programa_id,
    Seccional: program.facultad_fk,
  };

  return (
    <div>
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className=" p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-gray-700 uppercase">
              Datos Personales
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex justify-center items-center">
                <img
                  src={student.estudiante_photo}
                  className="w-full max-w-52 h-60 aspect-[4/3] object-cover object-center rounded bg-gray-50 dark:bg-gray-800"
                />
              </div>

              <div className="md:col-span-2 bg-gray-50 dark:bg-gray-800 rounded p-4">
                <h2 className="text-lg font-semibold uppercase">
                  Datos del Estudiante
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 ">
                  {Object.keys(personalData).map((key) => (
                    <p key={key} className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">{key}: </span>
                      {personalData[key]}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 mt-4">
              <h2 className="text-lg font-semibold uppercase">
                Datos del Programa
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {Object.keys(programData).map((key) => (
                  <p key={key} className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">{key}: </span>
                    {programData[key]}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
