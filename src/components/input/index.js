import React from 'react';
import PropTypes from 'prop-types';
import './index.css'


function SEARCHCOMPONENT({
  htmlFor,
  labelCustomClass,
  innerTextLabel,
  inputCustomClass,
  InputType,
  placeHolder
}) {
  return (
    <>
      <input className={`${inputCustomClass} search-input-text catalog-search-bar`} type={InputType} placeholder={placeHolder} />
    </>
  )
}

SEARCHCOMPONENT.propTypes = {
  btnCustomClassName: PropTypes.string.isRequired,
  innerTextBtn: PropTypes.string.isRequired,
  handleSubmitAction: PropTypes.func
}


export default SEARCHCOMPONENT;