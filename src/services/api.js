import axios from "axios";

//const API_URL = "https://d847bd3f87e5b0d0305beee9161a25e3.loophole.site";
const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const getStudents = (pageNumber, pageSize, sortBy, sortDirection) => {
  return axios.get(`${API_URL}/estudiantes/`, {
    params: {
      PageSize: pageSize,
      PageNumber: pageNumber,
      "SortParameter.SortBy": sortBy,
      "SortParameter.SortDirection": sortDirection,
    },
  });
};

export const getGroups = (pageNumber, pageSize, sortBy, sortDirection) => {
  return axios.get(`${API_URL}/grupos/`, {
    params: {
      PageSize: pageSize,
      PageNumber: pageNumber,
      "SortParameter.SortBy": sortBy,
      "SortParameter.SortDirection": sortDirection,
    },
  });
};

export const getStudentSubjects = (studentId) => {
  return axios.get(`${API_URL}/estudiantes/${studentId}/materias_grupo/`);
};

export const getSubjects = (pageNumber, pageSize, sortBy, sortDirection) => {
  return axios.get(`${API_URL}/asignaturas/`, {
    params: {
      PageSize: pageSize,
      PageNumber: pageNumber,
      "SortParameter.SortBy": sortBy,
      "SortParameter.SortDirection": sortDirection,
    },
  });
};

export const getSubjectStudents = (studentId) => {
  return axios.get(`${API_URL}/asignatura/${studentId}/estudiantes/`);
};

export const getInscriptions = () => {
  return axios.get(`${API_URL}/programas/`, {});
};

export const getStudentInfo = (id) => {
  return axios.get(`${API_URL}/estudiantes/${id}`);
};

export const getProgramInfo = (id) => {
  return axios.get(`${API_URL}/programa/${id}`);
};

export const postAuth = (user, password) => {
  return axios.post(`${API_URL}/login`, {
    autenticacion_user: user,
    autenticacion_password: password,
  });
};

export const postLoginByFace = async (imageBase64) => {
  const filename = "image.jpg"; // Define el nombre del archivo

  // Convierte base64 a un archivo Blob
  const base64ToBlob = (base64, mimeType) => {
    const byteCharacters = atob(base64.split(",")[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
  };

  const blob = base64ToBlob(imageBase64, "image/jpeg");

  // Crea un objeto FormData
  const formData = new FormData();
  formData.append("photo", blob, filename);

  // Envía la solicitud POST
  try {
    const response = await axios.post(`${API_URL}/login-by-face/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting image:", error);
    throw error;
  }
};

export const editStudent = (studentId, studentData) => {
  return axios.patch(
    `${API_URL}/actualizar_estudiante/${studentId}`,
    studentData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const getMateriasByStudent = (id) => {
  return axios.get(`${API_URL}/estudiantes/${id}/asignaturas_con_grupos`);
};

export const postInscriptions = (data) => {
  return axios.post(`${API_URL}/crear_inscripcion/`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
