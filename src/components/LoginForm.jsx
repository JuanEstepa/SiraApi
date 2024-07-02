import {
  EnvelopeIcon,
  EyeIcon,
  KeyIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([user, password].includes("")) {
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
    console.log(user + " " + password);
  };

  return (
    <div className="bg-white dark:bg-gray-700 p-8 rounded-lg w-full md:w-96">
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
        <div>
          <button
            type="submit"
            className="uppercase mt-6 bg-rose-500 text-white w-full py-2 px-6 rounded-lg hover:scale-105 hover:bg-rose-700 transition-all"
          >
            Ingresar
          </button>
        </div>
      </form>
      <div className="text-center pt-6">
        <p className="font-medium">
          ¿No tienes cuenta?{" "}
          <Link
            className="font-semibold text-rose-600 hover:text-rose-700 transition-all"
            to={"/Registration"}
          >
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
