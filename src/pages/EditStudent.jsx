import SideBar from "../components/SideBar";
import { useState, useEffect } from "react";
import { getStudentInfo, editStudent } from "../services/api";
import { useUserContext } from "../UserProvider";
import { toast } from "react-toastify";

const EditStudent = () => {
  const [student, setStudent] = useState({});
  const [studentData, setStudentData] = useState({
    estudiante_name: "",
    estudiante_last_name: "",
    estudiante_type_doc: "",
    estudiante_status: "",
  });

  const usuario = useUserContext();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await getStudentInfo(usuario.student_id);
        setStudent(response.data);
        setStudentData({
          estudiante_name: response.data.estudiante_name || "",
          estudiante_last_name: response.data.estudiante_last_name || "",
          estudiante_type_doc: response.data.estudiante_type_doc || "",
          estudiante_status: response.data.estudiante_status || "",
        });
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };
    fetchStudents();
  }, [usuario.student_id]);

  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await editStudent(student.estudiante_id, studentData);
      console.log("Student updated:", response.data);
      toast.success("Estudiante actualizado con éxito");
    } catch (error) {
      console.error("Error updating student:", error);
      toast.error("Error al actualizar el estudiante");
    }
  };

  return (
    <div>
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="flex justify-center items-center min-h-screen rounded-lg dark:bg-gray-800">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg w-full max-w-md">
              <div className="mb-10">
                <h1 className="text-3xl uppercase font-bold text-center">
                  Editar Estudiante
                </h1>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 text-gray-500"
              >
                <div className="relative">
                  <label>Nombre</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 outline-none py-2 px-4 rounded-lg"
                    placeholder="Nombre"
                    name="estudiante_name"
                    value={studentData.estudiante_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <label>Apellido</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 outline-none py-2 px-4 rounded-lg"
                    placeholder="Apellido"
                    name="estudiante_last_name"
                    value={studentData.estudiante_last_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <label className="block text-gray-700 dark:text-gray-200">
                    Tipo Documento
                  </label>
                  <select
                    name="estudiante_type_doc"
                    id="typeDocument"
                    className="w-full border border-gray-200 outline-none py-2 px-4 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                    value={studentData.estudiante_type_doc}
                    onChange={handleChange}
                  >
                    <option value="CC">Cedula</option>
                    <option value="TI">Tarjeta de identidad</option>
                    <option value="CE">Cedula de exteanjeria</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="block text-gray-700 dark:text-gray-200">
                    Estado
                  </label>
                  <select
                    name="estudiante_status"
                    id="status"
                    className="w-full border border-gray-200 outline-none py-2 px-4 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                    value={studentData.estudiante_status}
                    onChange={handleChange}
                  >
                    <option value="AC">Activo</option>
                    <option value="IN">Inactivo</option>
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="uppercase mt-6 bg-rose-500 text-white w-full py-2 px-6 rounded-lg hover:scale-105 hover:bg-rose-700 transition-all"
                  >
                    Guardar Cambios
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;
