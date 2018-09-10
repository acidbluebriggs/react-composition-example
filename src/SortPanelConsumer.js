import React from 'react'
import { pure } from 'recompose'
import { Context } from './SortableProvider'
import { SortPanel } from './SortPanel'

const SortPanelConsumer = pure(function SortPanelConsumer({ comparators }) {
  return (
    <Context.Consumer>
      {({ sort }) => <SortPanel comparators={comparators} sort={sort} />}
    </Context.Consumer>
  )
})

export { SortPanelConsumer }
