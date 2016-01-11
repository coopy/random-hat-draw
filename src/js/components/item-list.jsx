import React from 'react';
import Radium from 'radium';

const ItemList = React.createClass({
  getStyles() {
    return {
      list: {
        margin: '1em 0'
      },
      item: {
        listDecoration: 'none',
        display: 'inline-block',
        padding: '0 2px',
        marginRight: '.5em',
        ':hover': {
          backgroundColor: '#e68e7a',
          color: '#fff',
          cursor: 'pointer'
        }
      }
    };
  },

  onClick(index) {
    this.props.onItemRemoved(index);
  },

  render() {
    const styles = this.getStyles();

    return (
      <ul style={styles.list}>
        {this.props.items.map((item, index) => {
          return (
            <li
              style={styles.item}
              key={index}
              onClick={this.onClick.bind(this, index)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    );
  }
})

export default Radium(ItemList);
