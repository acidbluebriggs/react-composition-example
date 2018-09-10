import React from 'react'
import PropTypes from 'prop-types'
import { pure } from 'recompose'
import { NumberElement } from './NumberElement'

const OrderedList = pure(function OrderedList({ data }) {
  return (
    <ol>
      {data.map((item, index) => (
        <li key={index}>
          <NumberElement num={item} />
        </li>
      ))}
    </ol>
  )
})

OrderedList.propTypes = {
  data: PropTypes.array.isRequired
}

export { OrderedList }
