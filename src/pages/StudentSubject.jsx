import SideBar from "../components/SideBar";

const StudentSubject = () => {
  return (
    <div>
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className=" p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div>
            <h1 className="p-6 font-bold dark:text-white text-3xl text-center uppercase">
              Materias
            </h1>
            <div className="flex flex-col items-center w-full">
              <div className="overflow-x-auto m-4 w-full rounded-xl">
                <table className="table-auto w-full">
                  <thead className="border-b">
                    <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
                      <th className="text-center p-4 font-medium">Id</th>
                      <th className="text-center p-4 font-medium">Nombre</th>
                      <th className="text-center p-4 font-medium">Aula</th>
                      <th className="text-center p-4 font-medium">Creditos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      /*subjects.map((subject) => (*/
                      <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/80 dark:text-white">
                        <td className="p-4 text-center">123</td>
                        <td className="p-4 text-center">Calculo III</td>
                        <td className="p-4 text-center">AAA303</td>
                        <td className="p-4 text-center">4</td>
                      </tr>
                      /*))*/
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSubject;
