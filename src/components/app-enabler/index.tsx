import React, { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { ModuleProps } from "../../Module";

interface Props extends ModuleProps, React.PropsWithChildren {}

export const AppEnabler: React.FC<Props> = ({
  awsImageUploadEnabled,
  awsPoolId,
  backendUrl,
  children,
  gapiEnabled,
  gapiKey,
}) => {
  const { state, dispatch } = useAppContext();

  const appProperties = state.moduleProperties;

  useEffect(() => {
    dispatch({
      type: "SET_MODULE_PROPERTIES",
      payload: { props: { awsImageUploadEnabled, awsPoolId, backendUrl, gapiEnabled, gapiKey } },
    });
  }, []);

  if (appProperties !== undefined) {
    return <>{children}</>;
  }
  return <></>;
};
