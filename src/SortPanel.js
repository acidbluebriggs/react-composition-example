import React from 'react'
import PropTypes from 'prop-types'
import { pure } from 'recompose'

const SortPanel = pure(function SortPanel({ comparators, sort }) {
  return comparators.map(config => {
    const { comparator, text } = config
    return (
      <button key={text} onClick={() => sort(comparator)}>
        {config.text}
      </button>
    )
  })
})

SortPanel.propTypes = {
  sort: PropTypes.func.isRequired,
  comparators: PropTypes.arrayOf(
    PropTypes.shape({
      comparator: PropTypes.fun,
      text: PropTypes.string.isRequired
    })
  )
}

export { SortPanel }
