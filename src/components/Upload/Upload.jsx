import React, { useState, useRef } from 'react';
import { UploadLabel } from './Upload.styles';
import PropTypes from 'prop-types';

export default function Upload({ onFileSelect }) {
  const [preview, setPreview] = useState(null);
  const inputRef = useRef(null);

  const readFile = (file) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      onFileSelect(file);
    };

    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) readFile(file);
  };

  const handleLabelClick = () => {
    inputRef.current?.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file) readFile(file);
  };

  return (
    <UploadLabel
      htmlFor='file-upload'
      onClick={handleLabelClick}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={preview ? 'has-preview' : ''}
    >
      {!preview ? (
        <>
          <div className='icon'>＋</div>
          <div className='placeholder'>파일을 클릭하거나 드래그하세요</div>
        </>
      ) : (
        <img src={preview} alt='Preview' className='preview' />
      )}
      <input
        id='file-upload'
        type='file'
        accept='image/*'
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </UploadLabel>
  );
}

Upload.propTypes = {
  onFileSelect: PropTypes.func.isRequired,
};
