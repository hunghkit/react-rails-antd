import React from 'react'
import PropTypes from 'prop-types';

const HelloWorld = ({ message }) => (
  <div>
    <p>{message}</p>
    <p>Edit component at: app/javascript/components/HelloWorld</p>
  </div>
)

HelloWorld.propTypes = {
  message: PropTypes.string,
}


export default HelloWorld;
