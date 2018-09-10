import React from 'react'
import { pure } from 'recompose'
import { Context } from './SortableProvider'
import { BulletedList } from './BulletedList'

const BulletedListConsumer = pure(function BulletedListConsumer() {
  return (
    <Context.Consumer>
      {({ data }) => <BulletedList data={data} />}
    </Context.Consumer>
  )
})

export { BulletedListConsumer }
