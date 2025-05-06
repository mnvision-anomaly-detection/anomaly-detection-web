import styled from 'styled-components';

export const UploadLabel = styled.div`
  width: 100%;
  height: 75%;
  background-color: #f0f0f0;
  border: 2px dashed #bbb;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #777;
  font-size: 1rem;
  transition:
    background-color 0.2s,
    border-color 0.2s;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #e8e8e8;
    border-color: #999;
  }

  input[type='file'] {
    display: none;
  }

  .icon {
    font-size: 2.5rem;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .placeholder {
    font-size: 0.95rem;
  }

  &.has-preview {
    border: none;
    background: none;
  }

  img.preview {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;
