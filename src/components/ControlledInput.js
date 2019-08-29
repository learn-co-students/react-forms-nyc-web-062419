// Code ControlledInput Component Here
import React, { Component } from "react"

export default class ControlledInput extends Component {
  state = { value: "" }

  handleChangeEvent = event => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <form
        onSubmit={event => {
          this.handleSubmit(event)
        }}
      >
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

// export default class Form extends Component {
//   state = { firstName: "John", lastName: "Henry" }

//   handleFirstNameChange = event => {
//     this.setState({ firstName: event.target.value })
//   }

//   handleLastNameChange = event => {
//     this.setState({ lastName: event.target.value })
//   }

//   render() {
//     return (
//       <form>
//         <input
//           type="text"
//           name="firstName"
//           onChange={event => this.handleFirstNameChange(event)}
//           value="this.state.firstName"
//         />
//         <input
//           type="text"
//           name="lastName"
//           onChange={event => this.handleLastNameChange(event)}
//           value="this.state.lastName"
//         />
//       </form>
//     )
//   }
// }

// ;<form onSubmit={event => this.handleSubmit(event)}></form>
