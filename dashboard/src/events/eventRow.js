import { Component } from 'react'

class EventRow extends Component {
  render() {

    const eventInstance = this.props.event

    return (
      <tr>
        <td></td>
        <td>{eventInstance.id}</td>
      </tr>
    )
  }
}
  
export default EventRow