import React, { useContext, useReducer } from "react";
import { ModuleProps } from "../Module";

type ValidationMode = "ValidateAndHide" | "ValidateAndShow";

type SetErrorsAction = {
  type: "SET_ERRORS";
  payload: {
    errors: any;
  };
};

type SetValidationMode = {
  type: "SET_VALIDATION_MODE";
  payload: {
    mode: ValidationMode;
  };
};

type SetModuleProperties = {
  type: "SET_MODULE_PROPERTIES";
  payload: {
    props: ModuleProps;
  };
};

type Action = SetErrorsAction | SetValidationMode | SetModuleProperties;

interface AppContextState {
  validationMode: ValidationMode;
  errors: any;
  moduleProperties?: ModuleProps;
}

type AppDispatch = (action: Action) => void;

const AppContext = React.createContext<
  { state: AppContextState; dispatch: AppDispatch } | undefined
>(undefined);

const reducer = (state: AppContextState, action: Action): AppContextState => {
  switch (action.type) {
    case "SET_ERRORS":
      return { ...state, errors: action.payload.errors };

    case "SET_VALIDATION_MODE":
      return { ...state, validationMode: action.payload.mode };

    case "SET_MODULE_PROPERTIES":
      return { ...state, moduleProperties: action.payload.props };
    default:
      return state;
  }
};

const initialState: AppContextState = {
  validationMode: "ValidateAndHide",
  errors: undefined,
};

const AppContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("context must be used within a AppContextProvider");
  }
  return context;
};

export { useAppContext, AppContextProvider };
