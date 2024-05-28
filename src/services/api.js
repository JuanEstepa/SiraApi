import axios from "axios";

const API_URL = "https://2a568cd06261529e7824cbc339bcb812.loophole.site";

export const getStudents = (pageNumber, pageSize, sortBy, sortDirection) => {
  return axios.get(`${API_URL}/students/`, {
    params: {
      "PageSize": pageSize,
      "PageNumber": pageNumber,
      "SortParameter.SortBy": sortBy,
      "SortParameter.SortDirection": sortDirection,
    },
  });
};

