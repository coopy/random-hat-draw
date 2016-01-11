import React from 'react';
import Modal from 'react-modal';

import GridRow from './grid-row';

function getStyles() {
  return {
    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(200, 200, 200, 0.75)'
    },
    content : {
      position                   : 'absolute',
      top                        : '40px',
      left                       : '40px',
      right                      : '40px',
      bottom                     : '40px',
      border                     : '2px solid #9d35c8',
      background                 : '#fff',
      overflow                   : 'auto',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '4px',
      outline                    : 'none',
      padding                    : '20px',
      height                     : '50%'
    },
    item: {
      fontSize: '2em',
      fontWeight: 'bold',
      marginBottom: '2em'
    }
  }
}

const ItemDisplay = ({ modalIsOpen, onModalClose, item }) => {
  const styles = getStyles();
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onModalClose}
      style={styles} >

      <GridRow>
        <h2>Your random pick is...</h2>
      </GridRow>
      <GridRow>
        <span style={styles.item} className={modalIsOpen ? 'rotate-animation' : ''}>{item}</span>
      </GridRow>
      <GridRow>
        <button onClick={onModalClose}>Close</button>
      </GridRow>
    </Modal>
  );
};

export default ItemDisplay;
