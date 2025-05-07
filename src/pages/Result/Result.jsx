import { useNavigate, useLocation } from 'react-router-dom';
import ImageDisplay from '../../components/Result/ImageDisplay';
import ResultBox from '../../components/Result/ResultBox';
import { Button } from '../../components/Button/Button.styles.js';
import { Container, ImageRow, ResultArea } from './Result.styles';
import { useEffect, useState } from 'react';

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const [resultData, setResultData] = useState(null);

  useEffect(() => {
    // 서버 연결 시에는 location.state 사용
    if (location.state) {
      setResultData(location.state);
    } else {
      // 서버 연결 전 개발용 mock 데이터
      setResultData({
        original: '/images/original.png',
        histogram: '/images/histogram.png',
        status: '정상',
      });
    }
  }, [location.state]);

  if (!resultData) return <div>결과 데이터를 불러오는 중입니다...</div>;

  return (
    <Container>
      <ImageRow>
        <ImageDisplay label='원본 이미지' src={resultData.original} />
        <ImageDisplay label='히스토그램' src={resultData.histogram} />
      </ImageRow>
      <ResultArea>
        <ResultBox status={resultData.status} />
        <Button onClick={() => navigate('/')} style={{ marginTop: '24px' }}>
          홈으로
        </Button>
      </ResultArea>
    </Container>
  );
}
