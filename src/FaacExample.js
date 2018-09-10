/* eslint-disable react/no-set-state */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { BulletedList } from './BulletedList'
import { OrderedList } from './OrderedList'
import { SortPanel } from './SortPanel'
import { Sortable } from './Sortable'

import './styles.css'

const FaacExample = ({ data, comparators }) => (
  <Sortable data={data}>
    {({ sort, data }) => (
      <Fragment>
        <SortPanel comparators={comparators} sort={sort} />
        <BulletedList data={data} />
        <OrderedList data={data} />
      </Fragment>
    )}
  </Sortable>
)

FaacExample.propTypes = {
  data: PropTypes.array.isRequired,
  comparators: PropTypes.arrayOf(
    PropTypes.shape({
      comparator: PropTypes.fun,
      text: PropTypes.string.isRequired
    })
  )
}

export { FaacExample }
