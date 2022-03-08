import React, {createContext, useContext, useReducer, useState} from 'react'

const StateContext = createContext();

export const StateProvider = ({reducer, initState, children}) => 
    
   { 
        const [searchQuery, setSearchQuery] = useState('hello')
       return (<StateContext.Provider value={useReducer(reducer, initState)}>
        {children}
    </StateContext.Provider>)}


export const useStateValue = () => useContext(StateContext);
