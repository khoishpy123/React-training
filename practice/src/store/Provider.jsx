// Libraries
import React, { useReducer } from 'react';

//store
import { Context } from './Context';

//reducer
import reducer, { initialState } from '../reducers/student.reducers';

//use Component Provider cover App
//-> can use state and dispatch in App and components in App
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
