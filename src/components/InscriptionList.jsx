import React, { useState, useEffect } from "react";
import { getInscriptions } from "../services/api";

const InscriptionList = () => {
  const [inscriptions, setInscriptions] = useState([]);

  useEffect(() => {
    const fetchInscriptions = async () => {
      try {
        const response = await getInscriptions();
        setInscriptions(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchInscriptions();
  });

  return (
    <div>
      <h1 className="p-6 font-bold dark:text-white text-3xl text-center uppercase">
        Inscription List
      </h1>
      <div className="flex flex-col items-center">
        <div className="overflow-x-auto m-4 w-auto rounded-xl">
          <table className="table-auto w-full ">
            <thead className="border-b">
              <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
                <th className="text-center p-4 font-medium">Id</th>
                <th className="text-center p-4 font-medium">Estudiante</th>
                <th className="text-center p-4 font-medium">Materia</th>
              </tr>
            </thead>
            <tbody>
              {inscriptions.map((inscription) => (
                <React.Fragment key={inscription.inscripcion_id}>
                  <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/80 dark:text-white">
                    <td className="p-4">{inscription.inscripcion_id}</td>
                    <td className="p-4">{inscription.student_id}</td>
                    <td className="p-4">{inscription.subject_id}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InscriptionList;
