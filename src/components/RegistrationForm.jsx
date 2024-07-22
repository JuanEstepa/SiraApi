import {
  EnvelopeIcon,
  EyeIcon,
  KeyIcon,
  EyeSlashIcon,
  UserIcon,
  HashtagIcon,
  FolderIcon,
  StarIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/outline";
import { postCreationAuth, postCreationEstudent } from "../services/api";
import { useState } from "react";
import { toast } from "react-toastify";

const RegistrationForm = () => {
  const [auth, setAuth] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [code, setCode] = useState("");
  const [typeDocument, setTypeDocument] = useState("");
  const [document, setDocument] = useState("");
  const [status, setStatus] = useState("");
  const [programa, setPrograma] = useState("");
  const [photo, setPhoto] = useState("");

  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const handleShowPass1 = () => {
    setShowPass1(!showPass1);
  };

  const handleSubmitAuth = async (e) => {
    e.preventDefault();

    if ([user, password, password1].includes("")) {
      toast.error("Todos los campos son obligatorios", {
        theme: "dark",
      });
      return;
    }
    if (password.length < 8) {
      toast.error("La contraseña debe tener al menos 8 caracteres", {
        theme: "dark",
      });
      return;
    }
    if (password !== password1) {
      toast.error("Las contraseñas no coinciden", {
        theme: "dark",
      });
    }

    if (password === password1) {
      const data = {
        autenticacion_user: user,
        autenticacion_password: password,
        rol_fk: 2,
      };

      try {
        const response = await postCreationAuth(data);
        console.log("Student created:", response.aut_id);
        toast.success("Credenciales creadas con éxito");
        setAuth(response.aut_id);
      } catch (error) {
        console.error("Error creating student:", error);
        toast.error("Error al crear el estudiante");
      }
    }
  };

  const handleSubmitCreation = async (e) => {
    e.preventDefault();

    const data = {
      estudiante_name: name,
      estudiante_last_name: lastName,
      estudiante_code: code,
      estudiante_type_doc: typeDocument,
      estudiante_document: document,
      estudiante_status: status,
      estudiante_programa_fk: programa,
      estudiante_autenticacion_fk: auth,
      photo: photo,
    };

    try {
      const response = await postCreationEstudent(data);
      console.log("Student created:", response.data);
      toast.success("Estudiante creado con éxito");
    } catch (error) {
      console.error("Error creating student:", error);
      toast.error("Error al crear el estudiante");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50/50">
      {auth ? (
        <div className="bg-white p-8 rounded-lg w-full md:w-96 shadow-lg">
          <div className="mb-10">
            <h1 className="text-3xl uppercase font-bold text-center">
              Llene los siguientes datos
            </h1>
          </div>
          <form
            onSubmit={handleSubmitCreation}
            className="flex flex-col gap-4 text-gray-500"
          >
            <div className="relative">
              <UserIcon className=" w-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative">
              <UserIcon className=" w-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
                placeholder="Apellido"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="relative">
              <HashtagIcon className=" w-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
                placeholder="Codigo"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="relative">
              <FolderIcon className="w-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                name="document"
                id="document"
                className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg appearance-none"
                onChange={(e) => setTypeDocument(e.target.value)}
              >
                <option value="">Selecciona una opción</option>
                <option value="CC">Cedula de ciudadania</option>
                <option value="TI">Tarjeta de identidad</option>
                <option value="CE">Cedula de extranjeria</option>
              </select>
            </div>
            <div className="relative">
              <HashtagIcon className=" w-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
                placeholder="Numero de Documento"
                value={document}
                onChange={(e) => setDocument(e.target.value)}
              />
            </div>
            <div className="relative">
              <StarIcon className="w-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                name="status"
                id="status"
                className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg appearance-none"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Selecciona una opción</option>
                <option value="AC">Activo</option>
                <option value="IN">Inactivo</option>
              </select>
            </div>
            <div className="relative">
              <HashtagIcon className=" w-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
                placeholder="Id de programa"
                value={programa}
                onChange={(e) => setPrograma(e.target.value)}
              />
            </div>
            <div className="relative">
              <CloudArrowUpIcon className="w-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="file"
                className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </div>
            <div>
              <button
                type="submit"
                className="uppercase mt-6 bg-rose-500 text-white w-full py-2 px-6 rounded-lg hover:scale-105 hover:bg-rose-700 transition-all"
              >
                Registrar Estudiante
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg w-full md:w-96 shadow-lg">
          <div className="mb-10">
            <h1 className="text-3xl uppercase font-bold text-center">
              Registrar Estudiante
            </h1>
          </div>
          <form
            onSubmit={handleSubmitAuth}
            className="flex flex-col gap-4 text-gray-500"
          >
            <div className="relative">
              <EnvelopeIcon className=" w-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
                placeholder="Usuario"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="relative">
              <KeyIcon className=" w-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPass ? "text" : "password"}
                className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPass ? (
                <EyeSlashIcon
                  onClick={handleShowPass}
                  className=" w-5 absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:cursor-pointer"
                />
              ) : (
                <EyeIcon
                  onClick={handleShowPass}
                  className=" w-5 absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:cursor-pointer"
                />
              )}
            </div>
            <div className="relative">
              <KeyIcon className=" w-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPass1 ? "text" : "password"}
                className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
                placeholder="Contraseña"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
              />
              {showPass1 ? (
                <EyeSlashIcon
                  onClick={handleShowPass1}
                  className=" w-5 absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:cursor-pointer"
                />
              ) : (
                <EyeIcon
                  onClick={handleShowPass1}
                  className=" w-5 absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:cursor-pointer"
                />
              )}
            </div>
            <div>
              <button
                type="submit"
                className="uppercase mt-6 bg-rose-500 text-white w-full py-2 px-6 rounded-lg hover:scale-105 hover:bg-rose-700 transition-all"
              >
                Registrar Estudiante
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
