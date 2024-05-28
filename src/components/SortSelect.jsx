const SortSelect = ({ setSortBy, setSortDirection }) => {
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
          <option value="student_id">Student Id</option>
          <option value="nombre">Name</option>
          <option value="numero_identificacion">Document Number</option>
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
