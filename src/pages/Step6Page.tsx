import React from "react";
import { Anmerkung } from "../components/anmerkung/Anmerkung";
import { ImageUploader } from "../components/image-uploader";
import { OrderUploader } from "../components/order-uploader";

export const Step6Page: React.FC = () => {
  return (
    <>
      <Anmerkung />
      <ImageUploader />
      <OrderUploader />
    </>
  );
};
