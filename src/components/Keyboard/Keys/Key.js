import React from 'react';
import './key.css';
const Key = ({keyType, keyName}) => {
  const addHighlight = (e) => {
    e.currentTarget.classList.add('key-hl');
  };

  const removeHighlight = (e) =>{
    e.currentTarget.classList.remove('key-hl');
  };

  return keyType === 'black' ? 
    <div className="key black-key" 
      onMouseDown={e=>addHighlight(e)} 
      onMouseUp={e=>removeHighlight(e)} 
      onMouseLeave={e=>removeHighlight(e)}>{ keyName }</div> :
    <div className="key" 
      onMouseDown={e=>addHighlight(e)} 
      onMouseUp={e=>removeHighlight(e)} 
      onMouseLeave={e=>removeHighlight(e)}>{ keyName }</div>;
};

export default Key;