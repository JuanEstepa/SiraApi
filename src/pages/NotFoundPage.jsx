import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-rose-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-100 mb-2">
          Página no encontrada
        </h2>
        <p className="text-gray-500 dark:text-white mb-6">
          Lo sentimos, pero la página que buscas no existe.
        </p>
        <Link
          to="/"
          className="inline-block bg-rose-500 text-white py-2 px-4 rounded-lg shadow-md shadow-rose-500/50 hover:bg-rose-700 transition duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
