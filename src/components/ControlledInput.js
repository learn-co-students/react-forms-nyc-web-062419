import React, {Component} from 'react'
export default class Form extends Component {
    state = {
      firstName: "John",
      lastName: "Henry"
    }

    handleNameChange = event => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })
      }
   
    render() {
      return (
          <div>
            <form>
            <input type="text" name="firstName" value={this.state.firstName} onChange={event => this.handleNameChange(event)} />
            <input type="text" name="lastName" value={this.state.lastName} onChange={event => this.handleNameChange(event)} />
            </form>
            <h1>First name: {this.state.firstName}<br/> Last name: {this.state.lastName}</h1>
        </div>
      )
    }
  }