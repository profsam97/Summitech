import React from "react";

const ContextApi = React.createContext({
    isSelected : '',
    changeSelected: () => {}
})
export default ContextApi;