// import styled from 'styled-components';

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 40px;
// `;

// export const ImageRow = styled.div`
//   display: flex;
//   gap: 40px;
//   justify-content: center;
//   margin-bottom: 20px;
// `;

// export const ResultArea = styled.div`
//   margin-top: 20px;
// `;

// Result.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto; /* 화면 위쪽과의 간격을 주어 아래로 내림 */
`;

export const ImageRow = styled.div`
  display: flex;
  justify-content: space-around; /* 이미지 간 간격을 설정 */
  width: 100%;
  margin: 40px 0; /* 이미지와 결과 박스 간격을 넓힘 */
`;

export const ResultArea = styled.div`
  margin-top: 30px; /* 결과 박스를 이미지와 더 떨어뜨리기 */
`;
