import React, { Component } from 'react'

export class ControlledInput extends Component {

    state = {
        firstName: '',
        lastName: ''
    }

    handleFirstNameChange = event => {
        this.setState({
        firstName: event.target.value
        });
    }

    handleLastNameChange = event => {
        this.setState({
        lastName: event.target.value
        });
    }

    handleChange = event => {
        this.setState({
        [event.target.name]: event.target.value
        })
    }


    render() {
        return (
        <form onChange={event => this.handleChange(event)}>
        <input type="text" name="firstName" value={this.state.firstName} />
        <input type="text" name="lastName" value={this.state.lastName} />
        </form>
        )
    }
}

export default ControlledInput
