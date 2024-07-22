import { useState, useRef } from "react";
import Webcam from "react-webcam";
import { CameraIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { postLoginByFace } from "../services/api";
import { useEditContext } from "../UserProvider";
import loadingGif from "../assets/pato-caminando.gif"; // Asegúrate de tener un gif de carga

const WebcamPage = () => {
  const [image, setImage] = useState(null);
  const [showRecommendations, setShowRecommendations] = useState(true);
  const [loading, setLoading] = useState(false);
  const webcamRef = useRef(null);

  const usuario = useEditContext();
  const navigate = useNavigate();

  function capture() {
    const imgSrc = webcamRef.current.getScreenshot();
    setImage(imgSrc);
    console.log(imgSrc);
  }

  function captureAgain() {
    setImage(null);
  }

  const handleCloseRecommendations = () => {
    setShowRecommendations(false);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (image) {
      setLoading(true);
      try {
        const response = await postLoginByFace(image);
        console.log("Response:", response);
        const { student_id } = response;

        console.log("user", student_id);

        usuario({ student_id });

        navigate("/Main");
      } catch (error) {
        console.error("Error posting auth:", error);
        toast.error("Error al iniciar sesión.", {
          theme: "dark",
        });
      } finally {
        setLoading(false); // Ocultar gif de carga
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-700 p-8 rounded-lg w-full">
      <div className="mb-6">
        <h1 className="text-3xl uppercase font-bold text-center">
          Identificación facial
        </h1>
      </div>
      {showRecommendations ? (
        <div className="bg-gray-200 dark:bg-gray-600 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-2 text-center">
            Recomendaciones para la foto
          </h2>
          <ul className="list-disc pl-5">
            <li>Hazte recto</li>
            <li>No hagas gestos</li>
            <li>Asegúrate de tener buena luz</li>
          </ul>
          <button
            className="mt-4 bg-rose-500 text-white py-2 px-4 rounded-lg hover:scale-105 hover:bg-rose-700 transition-all"
            onClick={handleCloseRecommendations}
          >
            Entendido
          </button>
        </div>
      ) : (
        <div>
          {image ? (
            <div>
              <div className="relative">
                <img src={image} alt="webcam" className="w-full h-auto" />
                {loading ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="text-center">
                      <img
                        src={loadingGif}
                        alt="CargandoPato"
                        className="w-16 h-16 mx-auto"
                      />
                      <p className="text-white font-bold mt-2">Cargando...</p>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="flex justify-center gap-5 mt-4">
                <button
                  className="items-center bg-rose-500 text-white py-2 px-6 rounded-lg hover:scale-105 hover:bg-rose-700 transition-all"
                  onClick={handleSend}
                  disabled={loading}
                >
                  Enviar
                </button>
                <button
                  className="text-center bg-rose-500 text-white py-2 px-6 rounded-lg hover:scale-105 hover:bg-rose-700 transition-all"
                  onClick={captureAgain}
                  disabled={loading}
                >
                  Tomar de nuevo
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="relative w-full h-96">
                <Webcam
                  className="w-full h-full"
                  audio={false}
                  mirrored={true}
                  screenshotFormat="image/jpeg"
                  ref={webcamRef}
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Face_ID_logo.svg/1200px-Face_ID_logo.svg.png" // Reemplaza con la ruta de tu imagen de silueta
                  alt="silueta"
                  className="absolute top-1/2 left-1/2 w-28 h-44 opacity-50 object-contain pointer-events-none transform -translate-x-1/2 -translate-y-1/2 filter invert"
                />
                <p className="absolute top-1/2 left-1/2 w-28 text-center text-white/70 transform -translate-x-1/2 translate-y-1/2 uppercase font-semibold mt-6">
                  Coloca tu cara en el centro
                </p>
              </div>
              <div className="flex justify-center gap-5 mt-4">
                <button
                  className="items-center bg-rose-500 text-white py-2 px-6 rounded-lg hover:scale-105 hover:bg-rose-700 transition-all"
                  onClick={capture}
                >
                  <CameraIcon className="w-8 h-8 text-white" />
                </button>
                <Link
                  className="text-center bg-rose-500 text-white py-2 px-6 rounded-lg hover:scale-105 hover:bg-rose-700 transition-all"
                  to="/"
                >
                  <ArrowUturnLeftIcon className="w-8 h-8 text-white" />
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WebcamPage;
