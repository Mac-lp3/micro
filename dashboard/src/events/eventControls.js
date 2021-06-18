import { Component } from 'react'

import EventRow from './eventRow'

class EventControls extends Component {

  constructor(props) {
    super(props)
    this.deleteEvent = this.deleteEvent.bind(this)
  }

  deleteEvent(key) {
    console.log(`deleting ${key}`)
  }

  render() {

    const eventArray = [{ id: 1}, { id: 2 }]
    const eventRows = eventArray.map(e => <EventRow key={e.id} event={e} delete={this.deleteEvent}/>)

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
            {eventRows}
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
 * new (modal)
 * 
 */