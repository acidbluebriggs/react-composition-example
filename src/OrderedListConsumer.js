import React from 'react'
import { pure } from 'recompose'
import { Context } from './SortableProvider'
import { OrderedList } from './OrderedList'

const OrderedListConsumer = pure(function OrderedListConsumer() {
  return (
    <Context.Consumer>
      {({ data }) => <OrderedList data={data} />}
    </Context.Consumer>
  )
})

export { OrderedListConsumer }
