import PropTypes from 'prop-types';

function Title(props) {
  return <h2>{props.title}</h2>;
}

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
