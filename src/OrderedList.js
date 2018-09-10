import React from 'react'
import PropTypes from 'prop-types'
import { pure } from 'recompose'
import { NumberElement } from './NumberElement'

/**
 An ordered list in a SFC using the 'pure()' HOC from 'recompose'.
 This uses the named function as to provide nicer debug messages, because
 without it we'd end up with 'unknown' being splatted out to the console.
 If you had a chain of these and saw things such as:

 index.js:2178 The above error occurred in one of your React components:
 in Unknown (created by pure(Component)) <--- THAT IS NOT FUN!
 in pure(Component) (at data-consumer.js:11)
 in GetData (at ContextExample.js:31)
 in Sortable (at ContextExample.js:22)
 in ContextExample (at index.js:32)
 in div (at index.js:30)
 in App (at index.js:38)

Giving a name can save so much digging:

 in OrderedList (created by pure(OrderedList)) <--- THAT IS MUCH BETTER!
 in pure(OrderedList) (at data-consumer.js:11)
 in GetData (at ContextExample.js:31)
 in Sortable (at ContextExample.js:22)
 in ContextExample (at index.js:32)
 in div (at index.js:30)
 in App (at index.js:38)

 Not to mention you won't see "(anonymous)" in teh stack trace either.

 We could export default but named exports are the most common for components
 and it's better to keep that consistent.
 */
const OrderedList = pure(function OrderedList({ data }) {
  return (
    <ol>
      {data.map((item, index) => (
        <li key={index}>
          <NumberElement num={item}/>
        </li>
      ))}
    </ol>
  )
})

OrderedList.propTypes = {
  data: PropTypes.array.isRequired
}

export { OrderedList }
