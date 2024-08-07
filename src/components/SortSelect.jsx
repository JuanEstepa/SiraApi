const SortSelect = ({ setSortBy, setSortDirection, list }) => {
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSortDirectionChange = (event) => {
    setSortDirection(event.target.value);
  };

  return (
    <div className="flex bg-gray-100 dark:bg-gray-800 max-w-lg py-3 px-5 rounded-lg">
      <label className="font-medium dark:text-white">
        Sort By:
        <select
          className=" ml-2 rounded-lg font-normal text-center dark:bg-[#1a2330] dark:text-white"
          onChange={handleSortByChange}
        >
          {list === "Students" ? (
            <>
              <option value="estudiante_id">Student Id</option>
              <option value="estudiante_name">Nombre</option>
              <option value="estudiante_last_name">Apellido</option>
              <option value="estudiante_programa_fk">Programa</option>
            </>
          ) : (
            <>
              <option value="grupo_id">Subject id</option>
              <option value="grupo_name">Name</option>
              <option value="grupo_classroom">Aula</option>
              <option value="asignatura_fk">Asignatura</option>
            </>
          )}
        </select>
      </label>
      <label className="ml-2 pl-2 border-l font-medium dark:text-white">
        Sort Direction:
        <select
          className="ml-2 rounded-lg font-normal text-center dark:bg-[#1a2330] dark:text-white"
          onChange={handleSortDirectionChange}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  );
};

export default SortSelect;
