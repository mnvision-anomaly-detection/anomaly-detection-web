import { Toggle as StyledToggle } from './Toggle.styles.js';
import PropTypes from 'prop-types';

export default function Toggle({ on, onClick }) {
  return (
    <StyledToggle
      on={on}
      onClick={onClick}
      aria-label={on ? '배터리캡' : '영구자석'}
    />
  );
}

Toggle.propTypes = {
  on: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
