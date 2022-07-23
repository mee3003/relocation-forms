import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModuleProps } from "../../Module";
import { AppState } from "../../store";
import { setModuleProps } from "../../store/preferencesReducer";

interface Props extends ModuleProps, React.PropsWithChildren {}

export const AppEnabler: React.FC<Props> = ({
  awsImageUploadEnabled,
  awsPoolId,
  backendUrl,
  children,
  gapiEnabled,
  gapiKey,
  apiKey,
  tenant,
}) => {
  const dispatch = useDispatch();

  const moduleProperties = useSelector<AppState, ModuleProps | undefined>(
    (state) => state.preferences.moduleProperties
  );

  useEffect(() => {
    dispatch(
      setModuleProps({
        props: {
          awsImageUploadEnabled,
          awsPoolId,
          backendUrl,
          gapiEnabled,
          gapiKey,
          apiKey,
          tenant,
        },
      })
    );
  }, []);

  if (moduleProperties !== undefined) {
    return <>{children}</>;
  }
  return <></>;
};
