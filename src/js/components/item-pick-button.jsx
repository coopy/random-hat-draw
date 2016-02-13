require('ladda/dist/ladda.min.css');
require('ladda/js/ladda');

import React from 'react';
import LaddaButton from 'react-ladda';

const ItemPickButton = (props) => {
  return (
    <LaddaButton
      data-style="slide-down"
      data-color="green"
      loading={props.loading}
      onClick={props.onClick}
    >
      {props.buttonText}
    </LaddaButton>
  );
};

export default ItemPickButton;
