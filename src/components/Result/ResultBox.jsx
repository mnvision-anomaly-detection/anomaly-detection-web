import { Box } from './ResultBox.styles';
import PropTypes from 'prop-types';

export default function ResultBox({ status }) {
  return <Box status={status}>{status || '결과 없음'}</Box>;
}

ResultBox.propTypes = {
  status: PropTypes.string,
};
