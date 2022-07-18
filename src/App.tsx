import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { HashRouter } from "react-router-dom";
import { AppPages } from "./pages";
import { AppContextProvider } from "./context/AppContext";
import { PageRoot } from "./pages/PageRoot";
import { store } from "./store";
import { loadAllCategories } from "./store/catReducer";
import { loadAllItems } from "./store/itemsReducer";
import { loadAllOptions } from "./store/optionsReducer";
import { loadAllServices } from "./store/servicesReducer";
import { Stepper } from "./components/stepper";

function App() {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <AppLoader>
          <HashRouter>
            <PageRoot>
              <AppPages />
              <Stepper />
            </PageRoot>
          </HashRouter>
        </AppLoader>
      </AppContextProvider>
    </Provider>
  );
}

const AppLoader: React.FC<React.PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    [loadAllOptions, loadAllCategories, loadAllServices, loadAllItems].map((action) => {
      dispatch(action());
    });
  }, [dispatch]);

  return <>{children}</>;
};
export default App;
