import React from 'react'
import PropTypes from 'prop-types'
import { pure } from 'recompose'
import { NumberElement } from './NumberElement'

const BulletedList = pure(function BulletedList({ data }) {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <NumberElement num={item} />
        </li>
      ))}
    </ul>
  )
})

BulletedList.propTypes = {
  data: PropTypes.array.isRequired
}

export { BulletedList }
