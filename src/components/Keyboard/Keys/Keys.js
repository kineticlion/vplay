import React from 'react';
import Key from './Key';
import './keys.css';

const Keys = ({octaves}) => {
  const OCTAVE_LENGTH = 12;
  const KEYS = [];
    for(let currentOctave = 1; currentOctave <= octaves; currentOctave++){
      for(let currentKey = 1; currentKey <= OCTAVE_LENGTH; currentKey++){
        switch(currentKey){
          case 1:
            KEYS.push(<Key keyType='white' keyName='C'/>);
            break;
          case 2:
            KEYS.push(<Key keyType='black' keyName='C#'/>);
            break;
          case 3:
            KEYS.push(<Key keyType='white' keyName='D'/>);
            break;
          case 4:
            KEYS.push(<Key keyType='black' keyName='D#'/>);
            break;
          case 5:
          KEYS.push(<Key keyType='white' keyName='E'/>);
          break;
          case 6:
            KEYS.push(<Key keyType='white' keyName='F'/>);
            break;
          case 7:
            KEYS.push(<Key keyType='black' keyName='F#'/>);
            break;
          case 8:
            KEYS.push(<Key keyType='white' keyName='G'/>);
            break;
          case 9:
          KEYS.push(<Key keyType='black' keyName='G#'/>);
          break;
          case 10:
            KEYS.push(<Key keyType='white' keyName='A'/>);
            break;
          case 11:
            KEYS.push(<Key keyType='black' keyName='A#'/>);
            break;
          case 12:
            KEYS.push(<Key keyType='white' keyName='B'/>);
            break;
          default:
            return;
        }
      }
      if(currentOctave === octaves){
        KEYS.push(<Key keyType='white' keyName='C'/>); //Exceptional case
      }
    }

  return (
    <div className='keys-container'>
      {
        KEYS.map((key,index) =>(
          <React.Fragment key={index}>
            {key}
          </React.Fragment>
        ))}
    </div>
  );
};

export default Keys;