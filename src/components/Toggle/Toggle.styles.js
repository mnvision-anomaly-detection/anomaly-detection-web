// ToggleButton.styles.ts
import styled from 'styled-components';

export const Toggle = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 25px;
  border: none;
  background: #f3b72e;
  position: relative;
  cursor: pointer;
  transition: background 0.3s;
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.6);

  &::after {
    content: '';
    position: absolute;
    top: 4.5px;
    left: ${({ on }) => (on ? '56px' : '4px')};
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 50%;
    transition: left 0.3s;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
  }
`;
