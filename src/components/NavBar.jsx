import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Students", to: "/", current: true },
  { name: "Subjects", to: "/Subjects", current: false },
  { name: "Inscriptions", to: "/Inscriptions", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [dark, setDark] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return true;
    }
    return false;
  });

  const handleClick = () => {
    setDark(!dark);
  };

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <Disclosure as="nav" className="dark:bg-gray-800  bg-gray-100">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://cdn-icons-png.flaticon.com/512/214/214337.png"
                    alt="Sirapp"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "dark:bg-gray-900 bg-gray-300 dark:text-white text-black "
                            : "dark:text-gray-300 text-gray-800 dark:hover:bg-gray-700 hover:bg-gray-200 dark:hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* DARKMODE */}
                <label
                  htmlFor="darkmode"
                  className=" w-12 mt-[3px] bg-gray-300 h-6 rounded-full cursor-pointer p-[2px] relative overflow-hidden"
                >
                  <input
                    onClick={handleClick}
                    id="darkmode"
                    type="checkbox"
                    className=" sr-only"
                  ></input>

                  <div className="w-[20px] h-[20px] rounded-full bg-white dark:translate-x-[24px] transition-all flex items-center justify-center">
                    {dark ? (
                      <MoonIcon className="h-4 w-4 text-gray-800" />
                    ) : (
                      <SunIcon className="h-6 w-6 text-gray-800" />
                    )}
                  </div>
                </label>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  className={classNames(
                    item.current
                      ? "dark:bg-gray-900 bg-gray-300 dark:text-white text-black"
                      : "dark:text-gray-300 text-gray-800 dark:hover:bg-gray-700 hover:bg-gray-200 dark:hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <Link to={item.to}>{item.name}</Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
