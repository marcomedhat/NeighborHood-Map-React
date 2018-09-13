import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ message }) => (
  <div className="error">
    <div className="message" role="alert">
      <p>{ message }</p>
    </div>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired
}

export default Error;