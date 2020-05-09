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
  <div className="black-key-container"> 
    <div className="black-key" 
      onMouseDown={e=>addHighlight(e)} 
      onMouseUp={e=>removeHighlight(e)} 
      onMouseLeave={e=>removeHighlight(e)}>{ keyName }</div>
    </div> :
    <div className="white-key" 
      onMouseDown={e=>addHighlight(e)} 
      onMouseUp={e=>removeHighlight(e)} 
      onMouseLeave={e=>removeHighlight(e)}>{ keyName }</div>;
};

export default Key;