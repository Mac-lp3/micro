import { Component } from 'react'

import EventRow from './eventRow'

class EventControls extends Component {

  render() {

    const eventArray = [{ id: 1}, { id: 2 }]
    const eventRows = eventArray.map(e => <EventRow event={e} />)

    return (
      <table>
        <thead>
          <tr>
            <td></td>
            <td>id</td>
            <td>created</td>
            <td>type</td>
            <td>props</td>
          </tr>
        </thead>
        <tbody>
          <td>
            {eventRows}
          </td>
        </tbody>
      </table>
    )
  }
}

export default EventControls

/**
 * ordered crono
 * 
 * (check box) | id | created | type | dump
 * 
 * new (modal) | delete (gray/delete checked)
 * 
 */