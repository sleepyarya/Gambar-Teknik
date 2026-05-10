import React from 'react';

const TugasPage = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <iframe
        src="/tugas.pdf"
        title="Tugas PDF"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default TugasPage;
