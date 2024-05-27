import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const getStudents = (pageNumber, pageSize, sortBy, sortDirection) => {
  return axios.get(`${API_URL}/students`, {
    params: {
      "PaginationParam.PageNumber": pageNumber,
      "PaginationParam.PageSize": pageSize,
      "SortParameter.SortBy": sortBy,
      "SortParameter.SortDirection": sortDirection,
    },
  });
};
