import SideBar from "../components/SideBar";
import { useState } from "react";
import { toast } from "react-toastify";

const EditStudent = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [code, setCode] = useState("");
  const [gender, setGender] = useState("");
  const [document, setDocument] = useState("");
  const [program, setProgram] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, lastName, code, gender, document, program].includes("")) {
      toast.error("Todos los campos son obligatorios", {
        theme: "dark",
      });
      return;
    }

    // Aquí puedes manejar el envío del formulario, como enviar los datos al servidor
    console.log({ name, lastName, code, gender, document, program });
  };

  return (
    <div>
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className=" p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="flex justify-center items-center min-h-screen  rounded-lg dark:bg-gray-800">
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
                  <input
                    type="text"
                    className="w-full border border-gray-200 outline-none py-2 px-4 rounded-lg"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full border border-gray-200 outline-none py-2 px-4 rounded-lg"
                    placeholder="Apellido"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full border border-gray-200 outline-none py-2 px-4 rounded-lg"
                    placeholder="Código"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full border border-gray-200 outline-none py-2 px-4 rounded-lg"
                    placeholder="Documento"
                    value={document}
                    onChange={(e) => setDocument(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full border border-gray-200 outline-none py-2 px-4 rounded-lg"
                    placeholder="Programa"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                  />
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
