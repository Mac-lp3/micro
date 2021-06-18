import { Component } from 'react'

class EventRow extends Component {

  render() {

    const eventInstance = this.props.event

    return (
      <tr>
        <td> 
          <button onClick={() => this.props.delete(this.props.event.id)}>X</button>
        </td> 
        <td>{eventInstance.id}</td>
      </tr>
    )
  }
}
  
export default EventRow