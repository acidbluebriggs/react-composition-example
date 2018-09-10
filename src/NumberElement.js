import React from 'react'
import PropTypes from 'prop-types'

const NumberElement = ({ num }) => (
  <span style={{ color: num % 2 === 0 ? 'green' : 'red' }}>{num}</span>
)

NumberElement.propTypes = {
  num: PropTypes.number.isRequired
}

export { NumberElement }
