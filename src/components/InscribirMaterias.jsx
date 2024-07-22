import React, { useState, useEffect } from "react";
import { useUserContext } from "../UserProvider";
import { useNavigate } from "react-router-dom";
import { getMateriasByStudent, postInscriptions } from "../services/api";
import { toast } from "react-toastify";
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

const InscribirMaterias = () => {
  const [subjects, setSubjects] = useState([]);
  const [isOpen, setIsOpen] = useState(null);

  const navigate = useNavigate();

  const toggleSubTable = (id) => {
    setIsOpen(isOpen === id ? null : id);
  };

  const handleIncripcion = async (id) => {
    console.log(id);

    const data = {
      estudiante_fk: usuario.student_id,
      grupo_fk: id,
    };

    try {
      const response = await postInscriptions(data);
      console.log("Response:", response.data);
      toast.success("Materia Inscrita con exito");
      navigate("/Main");
    } catch (error) {
      console.error("Error posting auth:", error);
      toast.error("Error al inscribir materia.", {
        theme: "dark",
      });
    }
  };

  const usuario = useUserContext();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await getMateriasByStudent(usuario.student_id);
        setSubjects(response.data); // Ensure that response.data is the correct path to your students array
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-4">
      <div>
        <h1 className="p-6 font-bold dark:text-white text-3xl text-center uppercase">
          Pendientes
        </h1>
        <div className="flex flex-col items-center w-full">
          <div className="overflow-x-auto m-4 w-full rounded-xl">
            <table className="table-auto w-full">
              <thead className="border-b">
                <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
                  <th className="text-center p-4 font-medium">Id</th>
                  <th className="text-center p-4 font-medium">Materia</th>
                  <th className="text-center p-4 font-medium">Ver Grupos</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject) => (
                  <React.Fragment key={subject.asignatura_id}>
                    <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/80 dark:text-white">
                      <td className="p-4 text-center">
                        {subject.asignatura_id}
                      </td>
                      <td className="p-4 text-center">
                        {subject.asignatura_nombre}
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => toggleSubTable(subject.asignatura_id)}
                        >
                          {isOpen === subject.asignatura_id ? (
                            <ArrowUpCircleIcon className="h-6 w-6 text-gray-500" />
                          ) : (
                            <ArrowDownCircleIcon className="h-6 w-6 text-gray-500" />
                          )}
                        </button>
                      </td>
                    </tr>
                    {isOpen === subject.asignatura_id && (
                      <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/80 dark:text-white">
                        <td colSpan="3">
                          <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                              <thead>
                                <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
                                  <th className="text-center p-4 font-medium">
                                    Id
                                  </th>
                                  <th className="text-center p-4 font-medium">
                                    Nombre
                                  </th>
                                  <th className="text-center p-4 font-medium">
                                    Aula
                                  </th>
                                  <th className="text-center p-4 font-medium">
                                    Creditos
                                  </th>
                                  <th className="text-center p-4 font-medium">
                                    Inscribir
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {subject.grupos.length > 0 ? (
                                  subject.grupos.map((grupo) => (
                                    <tr
                                      className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/80 dark:text-white"
                                      key={grupo.grupo_id}
                                    >
                                      <td className="p-4 text-center">
                                        {grupo.grupo_id}
                                      </td>
                                      <td className="p-4 text-center">
                                        {grupo.grupo_name}
                                      </td>
                                      <td className="p-4 text-center">
                                        {grupo.grupo_classroom}
                                      </td>
                                      <td className="p-4 text-center">
                                        {grupo.grupo_credits}
                                      </td>
                                      <td className="p-4 text-center">
                                        <button
                                          onClick={() =>
                                            handleIncripcion(grupo.grupo_id)
                                          }
                                        >
                                          <ArrowRightCircleIcon className="h-6 w-6 text-green-500" />
                                        </button>
                                      </td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td
                                      colSpan="5"
                                      className="p-4 text-center text-red-500"
                                    >
                                      Asignatura sin grupo
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InscribirMaterias;
