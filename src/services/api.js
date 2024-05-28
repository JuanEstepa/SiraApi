import axios from "axios";

const API_URL = "https://8901d8c65b51e937291429eff318f361.loophole.site";

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

export const getStudentSubjects = (studentId) => {
  return axios.get(`${API_URL}/students/${studentId}/subjects/`);
};

