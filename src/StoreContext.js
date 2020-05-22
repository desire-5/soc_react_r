import React from 'react';

//  dodnt use now!!!
// use react-redux . inside there is CONTEXT  
const StoreContext = React.createContext(null);

export const Provider = (props) => {
    return (
     <StoreContext.Provider value={props.store}>
         {props.children}
     </StoreContext.Provider>
    )
}

export default StoreContext;