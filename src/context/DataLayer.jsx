/* eslint-disable react/prop-types */

import React, { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

const DataLayerContext = createContext();

export const DataLayer = ({ children }) => {
  return (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataLayerContext.Provider>
  );
};

export const useDataLayerValue = () => {
  return useContext(DataLayerContext);
};
