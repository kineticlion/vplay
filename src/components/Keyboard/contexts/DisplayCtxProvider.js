import React, {createContext, useState} from 'react';

export const DisplayContext = createContext();

const DisplayCtxProvider = (props) =>{
    const [note,setNote] = useState('Play any key');
    const [isDown,setIsDown] = useState(false);
    const changeNote = (event) =>{
        if(event.type === 'mouseup'){
            setIsDown(false);
            setNote('Play any key');
        }
        if(event.type==='mousedown'){
            setIsDown(true);
            setNote(event.target.innerHTML);
        }
        if(event.type==='mouseover'){
            if(isDown){
                setNote(event.target.innerHTML);
            }
        }

    };
    return (
        <DisplayContext.Provider
            value={{
                note,
                changeNote
            }}
        >
            {props.children}
        </DisplayContext.Provider>
    );
};

export default DisplayCtxProvider;

