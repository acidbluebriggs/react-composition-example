/* eslint-disable react/no-set-state */
import React from 'react'
import PropTypes from 'prop-types'

import {BulletedList} from './BulletedList'
import {OrderedList} from './OrderedList'

import { Sortable } from './SortableProvider'
import './styles.css'

import {getData} from './data-consumer'
import { SortPanelConsumer } from './SortPanelConsumer'

// An example of how we can simply use an HOC for the context consumers
// and simply treat them the same. These components do not have any other
// required attributes.
const BulletedListConsumer = getData(BulletedList)
const OrderedListConsumer = getData(OrderedList)

const ContextExample = ({ data, comparators }) => (
  <Sortable data={data}>
    {/*
      This consumer was created differently as the SortPanel component has
      a required 'sort' field as well as 'comparators'. If we were to simply
      wrap it with our getData() HOC, we'd get propType warnings. We don't
      want to relax our APIs requirements just because of convenience.
      Note: The other components just receive the 'data' attribute from the
      provider. The sort panel gets the sort value
     */}
    <SortPanelConsumer comparators={comparators} />
    <BulletedListConsumer />
    <OrderedListConsumer />)
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
