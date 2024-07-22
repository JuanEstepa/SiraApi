import {
  EnvelopeIcon,
  EyeIcon,
  KeyIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const RegistratiomForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const handleShowPass1 = () => {
    setShowPass1(!showPass1);
  };

  const handleSubmit = (e) => {
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
    if (password != password1) {
      toast.error("Las contraseñas no coinciden", {
        theme: "dark",
      });
    }
    console.log(user + " " + password);
  };

  return (
    <div className="bg-white  p-8 rounded-lg w-full md:w-96">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">Registrate</h1>
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
            Registrarse
          </button>
        </div>
      </form>
      <div className="text-center pt-6">
        <p className="font-medium">
          ¿Ya tienes cuenta?{" "}
          <Link
            className="font-semibold text-rose-600 hover:text-rose-700 transition-all"
            to={"/"}
          >
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistratiomForm;
