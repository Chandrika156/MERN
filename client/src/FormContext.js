import React, { createContext, useState } from "react";

export const FormContext = createContext();
export const FormProvider = ({ children }) => {
  const [localDB, setDB] = useState([]);
  return (
    <FormContext.Provider value={{ localDB, setDB }}>
      {children}
    </FormContext.Provider>
  );
};