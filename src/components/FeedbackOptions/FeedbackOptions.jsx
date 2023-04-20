import PropTypes from 'prop-types';
import { Button, BtnWrapper } from './FeedbackOptions.styled.jsx';


const FeedbackOptions = ({ options, onBtnClick }) => (
  <BtnWrapper>
    {options.map(option => (
      <Button type="button" key={option} onClick={() => onBtnClick(option)}>
        {option}
      </Button>
    ))}
  </BtnWrapper>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};
export default FeedbackOptions;