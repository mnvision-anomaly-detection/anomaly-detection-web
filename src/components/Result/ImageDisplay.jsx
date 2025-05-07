import { Container, Label, StyledImage } from './ImageDisplay.styles';
import PropTypes from 'prop-types';

export default function ImageDisplay({ label, src }) {
  return (
    <Container>
      <Label>{label}</Label>
      {src ? <StyledImage src={src} alt={label} /> : <div>이미지 없음</div>}
    </Container>
  );
}

ImageDisplay.propTypes = {
  label: PropTypes.string.isRequired,
  src: PropTypes.string,
};
