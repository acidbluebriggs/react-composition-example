import React from 'react'
import PropTypes from 'prop-types'
import { NumberElement } from './NumberElement'

/*
 A bulleted list in es6 class form.
 */
class BulletedList extends React.PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  render() {
    return (<ul>
      {
        this.props.data.map((item, index) => (
        <li key={index}>
          <NumberElement num={item} />
        </li>
      ))}
    </ul>)
  }
}



export { BulletedList }
