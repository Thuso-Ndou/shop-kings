import React, { createContext, useContext, useReducer } from "react";

// Create a context for the state
export const StateContext = createContext();

// Define the StateProvider component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Define a custom hook to use the state
export const useStateValue = () => useContext(StateContext);
