import React, { useState } from "react";
import { Anmerkung } from "../components/anmerkung/Anmerkung";
import { ImageUploader } from "../components/image-uploader";
import { OrderUploader } from "../components/order-uploader";
import { useAppContext } from "../context/AppContext";

export const Step6Page: React.FC = () => {
  const [uploaderEnabled, setUploaderEnabled] = useState(false);

  const {
    state: { moduleProperties },
  } = useAppContext();

  React.useEffect(() => {
    if (moduleProperties) {
      console.debug("AWS uploader enabled: ", moduleProperties.awsImageUploadEnabled);
      setUploaderEnabled(moduleProperties.awsImageUploadEnabled == "true");
    }
  }, []);

  return (
    <>
      <Anmerkung />
      {uploaderEnabled && <ImageUploader />}
      <OrderUploader />
    </>
  );
};
