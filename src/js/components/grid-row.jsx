import React from 'react';

const GridRow = ({ children }) => {
  return(
    <div className="Grid Grid--alignMiddle Grid--fit Grid--equalHeight">
      <div className="Grid-cell Grid--alignCenter u-size1of1">
        {children}
      </div>
    </div>
  );
};

export default GridRow;
