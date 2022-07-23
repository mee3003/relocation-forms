import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Anmerkung } from "../components/anmerkung/Anmerkung";
import { ImageUploader } from "../components/image-uploader";
import { OrderUploader } from "../components/order-uploader";
import { ModuleProps } from "../Module";
import { AppState } from "../store";

export const Step6Page: React.FC = () => {
  const [uploaderEnabled, setUploaderEnabled] = useState(false);

  const moduleProperties = useSelector<AppState, ModuleProps | undefined>(
    (state) => state.preferences.moduleProperties
  );

  React.useEffect(() => {
    if (moduleProperties) {
      console.debug("AWS uploader enabled: ", moduleProperties.awsImageUploadEnabled);
      setUploaderEnabled(moduleProperties.awsImageUploadEnabled == "true");
    }
  }, [moduleProperties]);

  return (
    <>
      <Anmerkung />
      {uploaderEnabled && <ImageUploader />}
      <OrderUploader />
    </>
  );
};
