import React, { useState } from 'react';

const FileInput = ({label, compulsory}) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
       {label &&  <label>{label} <span className='compulsory'>{compulsory}</span></label>}
      <input type="file" className='form-control' onChange={handleFileChange} />
      {selectedFile && <p>{selectedFile.name}</p>}
    </div>
  );
};

export default FileInput;
