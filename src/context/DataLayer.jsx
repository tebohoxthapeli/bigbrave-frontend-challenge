/* eslint-disable react/prop-types */

import React, { createContext, useContext, useReducer } from "react";

const DataLayerContext = createContext();

const DataLayer = ({ initialState, reducer, children }) => {
  return (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataLayerContext.Provider>
  );
};

const useDataLayerValue = () => {
  return useContext(DataLayerContext);
};

export { DataLayer, DataLayerContext, useDataLayerValue };
