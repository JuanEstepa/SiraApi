import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { postAuth } from "../services/api";
import { useEditContext } from "../UserProvider";
import {
  EnvelopeIcon,
  EyeIcon,
  KeyIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const usuario = useEditContext();
  const navigate = useNavigate();

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([user, password].includes("")) {
      toast.error("Todos los campos son obligatorios", {
        theme: "dark",
      });
      return;
    }

    try {
      const response = await postAuth(user, password);
      console.log("Response.data:", response.data); // Verifica los datos aquí

      // Extraer los valores deseados
      const { student_id, rol } = response.data;
      console.log("Datos a establecer en contexto:", { student_id, rol });

      usuario({ student_id });

      if (rol == 1) {
        navigate("/Students");
      } else {
        navigate("/Main");
      }
    } catch (error) {
      console.error("Error posting auth:", error);
      toast.error("Error al iniciar sesión. Verifica tus credenciales.", {
        theme: "dark",
      });
    }
  };

  const handleFaceButtonClick = () => {
    navigate("/Webcam");
  };

  return (
    <div className="bg-white  p-8 rounded-lg w-full md:w-96">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">
          Iniciar sesión
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
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
        <div className="flex gap-2 justify-center mt-2">
          <div>
            <button
              to="/Main"
              type="submit"
              className="uppercase bg-rose-500 text-white w-full py-2 px-6 rounded-lg hover:scale-105 hover:bg-rose-700 transition-all"
            >
              Ingresar
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={handleFaceButtonClick}
              className="uppercase bg-rose-500 text-white w-full py-2 px-6 rounded-lg hover:scale-105 hover:bg-rose-700 transition-all"
            >
              Face
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

{
  /* <div className="text-center pt-6">
        <p className="font-medium">
          ¿No tienes cuenta?{" "}
          <Link
            className="font-semibold text-rose-600 hover:text-rose-700 transition-all"
            to={"/Registration"}
          >
            Registrate
          </Link>
        </p>
      </div> */
}
