import styled from 'styled-components';

export const Box = styled.div`
  margin-top: 20px;
  padding: 16px 24px;
  background-color: ${({ status }) =>
    status === '정상' ? 'green' : status === '비정상' ? 'red' : 'gray'};
  color: white;
  border: 2px solid;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  display: flex;
`;
