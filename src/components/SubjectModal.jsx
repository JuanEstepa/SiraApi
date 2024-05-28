import React from 'react';

const SubjectModal = ({ subjects, onClose }) => {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>Subjects</h2>
        <ul>
          {subjects.map((subject) => (
            <li key={subject.subject_id}>{subject.nombre}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SubjectModal;