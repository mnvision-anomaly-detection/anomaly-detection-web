import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 48px;
  padding: 0 20px;
  border: none;
  border-radius: 24px;
  background-color: #104681;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  transition:
    background-color 0.3s,
    transform 0.2s;

  &:hover {
    background-color: rgb(12, 53, 96);
  }

  &:active {
    background-color: rgb(8, 38, 69);
  }

  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
