import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { AppEnabler } from "./components/app-enabler";
import { AppLoader } from "./components/app-loader";
import { MyStepper } from "./components/my-stepper";
import { AppContextProvider } from "./context/AppContext";
import { AppPages } from "./pages";
import { PageRoot } from "./pages/PageRoot";
import { store } from "./store";

export interface ModuleProps {
  backendUrl?: string;
  gapiEnabled?: any;
  gapiKey?: string;
  awsImageUploadEnabled?: any;
  awsPoolId?: string;
}

export const Module: React.FC<ModuleProps> = (props) => {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <AppEnabler {...props}>
          <AppLoader>
            <HashRouter>
              <PageRoot>
                <AppPages />
                <MyStepper />
              </PageRoot>
            </HashRouter>
          </AppLoader>
        </AppEnabler>
      </AppContextProvider>
    </Provider>
  );
};
