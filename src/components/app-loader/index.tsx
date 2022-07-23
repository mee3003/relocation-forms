import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModuleProps } from "../../Module";
import { AppState } from "../../store";
import { loadAllCategories } from "../../store/catReducer";
import { loadAllItems } from "../../store/itemsReducer";
import { loadAllOptions } from "../../store/optionsReducer";
import { loadAllPackings } from "../../store/packingsReducer";

export const AppLoader: React.FC<React.PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();

  const moduleProperties = useSelector<AppState, ModuleProps | undefined>(
    (state) => state.preferences.moduleProperties
  );

  useEffect(() => {
    [loadAllOptions, loadAllCategories, loadAllPackings, loadAllItems].forEach((action) => {
      dispatch(
        action({ backendUrl: moduleProperties?.backendUrl!, tenant: moduleProperties?.tenant! })
      );
    });
  }, [dispatch, moduleProperties]);

  return <>{children}</>;
};
