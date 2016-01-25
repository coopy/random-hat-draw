import React from 'react';

const Header = () => {
  return (
    <header className="Grid Grid--alignMiddle Grid--fit Grid--equalHeight">
      <div className="Grid-cell Grid--alignCenter u-size1of1 u-lg-size1of2">
        <img className="figure" src="static/images/misteraibo-hat.png"></img>
      </div>
      <div className="Grid-cell Grid--alignCenter u-size1of1 u-lg-size1of2">
        <h1 className="unit">Random Hat Draw!</h1>
      </div>
    </header>
  );
};

export default Header;
