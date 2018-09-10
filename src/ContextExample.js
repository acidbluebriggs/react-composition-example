/* eslint-disable react/no-set-state */
import React from 'react'
import PropTypes from 'prop-types'
import { BulletedListConsumer as BulletedList } from './BulletedListConsumer'
import { OrderedListConsumer as OrderedList } from './OrderedListConsumer'
import { SortPanelConsumer as SortPanel } from './SortPanelConsumer'
import { Sortable } from './SortableProvider'

import './styles.css'

const ContextExample = ({ data, comparators }) => (
  <Sortable data={data}>
    <SortPanel comparators={comparators} />
    <BulletedList />
    <OrderedList />
  </Sortable>
)

ContextExample.propTypes = {
  data: PropTypes.array.isRequired,
  comparators: PropTypes.arrayOf(
    PropTypes.shape({
      comparator: PropTypes.fun,
      text: PropTypes.string.isRequired
    })
  )
}

export { ContextExample }
