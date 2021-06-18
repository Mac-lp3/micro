import { Component } from 'react'

import EventRow from './eventRow'

class EventControls extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eventArray: [{ id: 1}, { id: 2 }]
    }
    this.deleteEvent = this.deleteEvent.bind(this)
    this.state.eventRows = this.state.eventArray.map(e => <EventRow key={e.id} event={e} delete={this.deleteEvent}/>)
  }

  deleteEvent(id) {

    console.log(`deleting ${id}`)

    this.setState((st, pr) => {
      for(let i = 0; i < st.eventArray.length; ++i) {
        if(st.eventArray[i].id === id) {
          st.eventArray.splice(i, 1)
          st.eventRows.splice(i, 1)
          break
        }
      }
      return {
        eventArray: st.eventArray,
        eventRows: st.eventRows
      }
    })
    
  }

  render() {

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
            {this.state.eventRows}
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