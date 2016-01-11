import React from 'react';

const charCodes = {
  44: 'comma',
  13: 'return'
}

const ItemInput = React.createClass({
  getInitialState() {
    return {
      inputValue: ''
    };
  },

  getStyles() {
    return {
      width: '100%'
    };
  },

  onChange(ev) {
    let inputValue = ev.target.value;
    if (inputValue === ',') {
      inputValue = '';
    }

    this.setState({
      inputValue
    });
  },

  onKeyPress(ev) {
    const { charCode } = ev;
    const { onItemEntered } = this.props;
    let inputValue = this.state.inputValue;

    if (charCodes[charCode]) {
      onItemEntered(inputValue);
      this.setState({
        inputValue: ''
      });
    }
  },

  render () {
    return (
      <input
        autoFocus="true"
        placeholder="Enter items followed by comma or return."
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
        value={this.state.inputValue}
        style={this.getStyles()}
      ></input>
    );
  }
});

export default ItemInput;
