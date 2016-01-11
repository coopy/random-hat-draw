import React from 'react';
import LaddaButton from 'react-ladda';
require('ladda/dist/ladda.min.css');

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
