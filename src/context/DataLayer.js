import React, { createContext, useReducer, useContext } from "react";

// Need Context API
// 1. To track basket
// 2. To Track user

//Prepares dataLayer
export const DataLayerContext = createContext();

//wrap our app and provides the data layer
export const DataLayer = ({ reducer, initialState, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

//Pull information from the data layer
export const useDataLayerValue = () => useContext(DataLayerContext);
