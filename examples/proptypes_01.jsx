import React from 'react';

const SawCat = ({count, onClick, ...props}) => (
  ...
);
SawCat.propTypes = {
  count: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func
};
SawCat.defaultProps = {
  onClick: () => {}
};

export default SawCat;
