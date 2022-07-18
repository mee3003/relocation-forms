import React from "react";
import { Heading } from "../components/commons/heading";
import { Verpackung } from "../components/verpackung";

export const Step5Verpackung: React.FC = () => {
  return (
    <>
      <Heading label="Verpackung zum Kauf?" />
      <Verpackung />
    </>
  );
};
