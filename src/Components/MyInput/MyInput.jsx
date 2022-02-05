import React from 'react';
import Style from './MyInput.module.css'

const MyInput = (props) => {
  return (
      <input className={Style.myInput} {...props} />
  )
};

export default MyInput;
