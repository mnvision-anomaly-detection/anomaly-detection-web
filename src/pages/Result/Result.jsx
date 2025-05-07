import ImageDisplay from '../../components/Result/ImageDisplay';
import ResultBox from '../../components/Result/ResultBox';
import { useState } from 'react';
import { Container, ImageRow, ResultArea } from './Result.styles';

export default function Result() {
  const [resultData, setResultData] = useState({
    original: null,
    processed: null,
    histogram: null,
    status: '',
  });

  // 임시 데이터
  const handleMockResult = () => {
    setResultData({
      original: '/images/original.png',
      processed: '/images/processed.png',
      histogram: '/images/histogram.png',
      status: '정상',
    });
  };

  return (
    <Container>
      <ImageRow>
        <ImageDisplay label='원본 이미지' src={resultData.original} />
        <ImageDisplay label='전처리 이미지' src={resultData.processed} />
        <ImageDisplay label='히스토그램' src={resultData.histogram} />
      </ImageRow>
      <ResultArea>
        <ResultBox status={resultData.status} />
      </ResultArea>
      <button onClick={handleMockResult}>결과 불러오기 (임시)</button>
    </Container>
  );
}
