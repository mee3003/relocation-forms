import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { AppRoutes } from "./AppRoutes";
import { AppContextProvider } from "./context/AppContext";
import { OrderContextProvider } from "./context/OrderContext";
import { store } from "./store";
import { loadAllCategories } from "./store/catReducer";
import { loadAllItems } from "./store/itemsReducer";
import { loadAllOptions } from "./store/optionsReducer";
import { loadAllServices } from "./store/servicesReducer";

function App() {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <OrderContextProvider>
          <AppLoader>
            <AppRoutes />
          </AppLoader>
        </OrderContextProvider>
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
