import React, { Component } from 'react';

class TransactionForm extends Component {
  state = {
    bAccountNo: '',
    iFSC: '',
    bName: '',
    amount: ''
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddOrEdit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete='off'>
        <input
          name='bAccountNo'
          placeholder='A/C No.'
          onChange={this.handleInputChange}
          value={this.state.bAccountNo}
        />
        <br />
        <input
          name='iFSC'
          placeholder='IFSC Code'
          onChange={this.handleInputChange}
          value={this.state.iFSC}
        />
        <br />
        <input
          name='bName'
          placeholder='A/C Holder Name'
          onChange={this.handleInputChange}
          value={this.state.bName}
        />
        <br />
        <input
          name='amount'
          placeholder='Amount'
          onChange={this.handleInputChange}
          value={this.state.amount}
        />
        <br />
        <button type='submit'>Submit</button>
        <br />
      </form>
    );
  }
}

export default TransactionForm;
