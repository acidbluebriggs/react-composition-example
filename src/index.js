/* eslint-disable react/no-set-state */
import React from 'react'
import ReactDOM from 'react-dom'
import { ContextExample } from './ContextExample'
import { FaacExample } from './FaacExample'
import { ascendingSort, descendingSort } from './number-comparators'

import './styles.css'

const initialProps = {
  data: [1, 4, 6, 7, 2, 9, 2, 5],
  comparators: [
    {
      comparator: ascendingSort,
      text: 'Ascending',
      isDefault: true
    },
    {
      comparator: descendingSort,
      text: 'Descending'
    },
    {
      comparator: undefined,
      text: 'Unsorted'
    }
  ]
}

const App = ({ data, comparators }) => (
  <div className="App">
    <h2>Provider Example</h2>
    <ContextExample data={data} comparators={comparators} />
    <h2>FaaC Example</h2>
    <FaacExample data={data} comparators={comparators} />
  </div>
)

ReactDOM.render(<App {...initialProps} />, document.getElementById('root'))
