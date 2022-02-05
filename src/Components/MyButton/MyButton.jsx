import React from 'react';
import Style from './MyButton.module.css'

const MyButton = ({children, ...props}) => {

  return (
      <button {...props} className={Style.myBtn}>
          {children}
      </button>
  )
};

export default MyButton;
