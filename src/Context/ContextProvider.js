import React, { useState } from 'react'
import ContextApi from './ContextApi';
const ContextProvider = (props) => {
    const [isSelected, setIsSelected]= useState(false);
    
    const changeSelected = () =>{
        setIsSelected(true)
    }
    const context = {
        isSelected,
        changeSelected
    }
  return (
    <ContextApi.Provider value={context}>{props.children}</ContextApi.Provider>
  )
}

export default ContextProvider