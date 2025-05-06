import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button.styles.js';
import Toggle from '../../components/Toggle/Toggle.jsx';
import Upload from '../../components/Upload/Upload.jsx';
import { Frame, Wrap, ToggleWrap, Option } from './Home.styles.js';

export default function Home() {
  const [magnet, setMagnet] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileSelect = (f) => {
    setFile(f);
  };

  const handleValidate = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('image', file);
    formData.append('type', magnet ? 'magnet' : 'cap');

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    navigate('/result', { state: data });
  };

  return (
    <Frame>
      <Wrap>
        <ToggleWrap>
          <Option>영구자석</Option>
          <Toggle on={magnet} onClick={() => setMagnet((prev) => !prev)} />
          <Option>배터리캡</Option>
        </ToggleWrap>

        <Upload onFileSelect={handleFileSelect} />

        <Button disabled={!file} onClick={handleValidate}>
          검증
        </Button>
      </Wrap>
    </Frame>
  );
}
