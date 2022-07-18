import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadAllCategories } from "../../store/catReducer";
import { loadAllItems } from "../../store/itemsReducer";
import { loadAllOptions } from "../../store/optionsReducer";
import { loadAllServices } from "../../store/servicesReducer";
import React from "react";
import { useAppContext } from "../../context/AppContext";

export const AppLoader: React.FC<React.PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();

  const { dispatch: appDispatch } = useAppContext();

  useEffect(() => {
    [loadAllOptions, loadAllCategories, loadAllServices, loadAllItems].map((action) => {
      dispatch(action());
    });
  }, [dispatch]);

  return <>{children}</>;
};
