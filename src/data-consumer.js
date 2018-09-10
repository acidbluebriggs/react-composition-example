import React from 'react'

import {Context} from './SortableProvider'

const getData = Component =>
  class GetData extends React.Component {
    render() {
      return (
        <Context.Consumer>
          { ({data}) =>
            <Component
              { ...this.props }
              data={data}
            />
          }
        </Context.Consumer>
      );
    }
  }

export { getData }
