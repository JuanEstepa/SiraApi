import {
  PencilSquareIcon,
  UserIcon,
  BookOpenIcon,
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6 text-gray-500" />
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/Main"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <UserIcon className="h-6 w-6 text-gray-500" />
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-500">
                  Información personal
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/EditStudent"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <PencilSquareIcon className="h-6 w-6 text-gray-500" />
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-500">
                  Editar información
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/StudentSubjects"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <BookOpenIcon className="h-6 w-6 text-gray-500" />
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-500">
                  Materias
                </span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <ArrowRightStartOnRectangleIcon className="h-6 w-6 text-gray-500" />
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-500">
                  Cerrar sesión
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
