import React from 'react'
import PropTypes from 'prop-types'

// Technically, there could be a higher level data provider as we could replace
// the list with a table, graphs, or whatever.
class Sortable extends React.PureComponent {
  static propTypes = {
    data: PropTypes.array
  }

  state = {
    comparator: undefined
  }
  /**
   * Invoke this function with a comparator to sort. Invoking with no
   * value will result in the the original order.
   */
  handleSort = comparator => this.setState({ comparator })

  render() {
    const { children, data } = this.props
    const { comparator } = this.state
    const sorted = (comparator && [...data].sort(comparator)) || data

    return children({ data: sorted, sort: this.handleSort })
  }
}

Sortable.propTypes = {
  data: PropTypes.array.isRequired
}

export { Sortable }
