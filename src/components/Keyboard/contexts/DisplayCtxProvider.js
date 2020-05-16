import React, {createContext, useState} from 'react';

export const DisplayContext = createContext();

const DisplayCtxProvider = (props) =>{
    const [note,setNote] = useState('Play any key');
    const [isDown,setIsDown] = useState(false);

    const changeNote = (event) =>{
        const note = event.target.innerHTML;
        switch (event.type) {
            case 'mousedown':
                setIsDown(true);
                setNote(note);
                break;
            case 'mouseup':
                setIsDown(false);
                setNote('Play any key');
                break;
            case 'mouseenter':
                if(isDown){
                    setNote(note);
                }
                break;
            default:
                setNote('Play any key')
                break;
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

