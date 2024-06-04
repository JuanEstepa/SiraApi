import axios from "axios";

//const API_URL = "https://d847bd3f87e5b0d0305beee9161a25e3.loophole.site";
const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const getStudents = (pageNumber, pageSize, sortBy, sortDirection) => {
  return axios.get(`${API_URL}/students/`, {
    params: {
      PageSize: pageSize,
      PageNumber: pageNumber,
      "SortParameter.SortBy": sortBy,
      "SortParameter.SortDirection": sortDirection,
    },
  });
};

export const getStudentSubjects = (studentId) => {
  return axios.get(`${API_URL}/students/${studentId}/subjects/`);
};

export const getSubjects = (pageNumber, pageSize, sortBy, sortDirection) => {
  return axios.get(`${API_URL}/subjectsw/`, {
    params: {
      PageSize: pageSize,
      PageNumber: pageNumber,
      "SortParameter.SortBy": sortBy,
      "SortParameter.SortDirection": sortDirection,
    },
  });
};

export const getSubjectStudents = (studentId) => {
  return axios.get(`${API_URL}/students/${studentId}/subjects/`);
};

export const getInscriptions = (
  pageNumber,
  pageSize,
  sortBy,
  sortDirection
) => {
  return axios.get(`${API_URL}/inscriptions/`, {
    params: {
      PageSize: pageSize,
      PageNumber: pageNumber,
      "SortParameter.SortBy": sortBy,
      "SortParameter.SortDirection": sortDirection,
    },
  });
};
