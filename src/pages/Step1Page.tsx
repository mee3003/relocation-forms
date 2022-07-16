import React from "react";
import { Customer } from "../components/customer";
import { DateWidget } from "../components/date/DateWidget";

export const Step1Page: React.FC = () => {
  return (
    <>
      <Customer />
      <DateWidget />
    </>
  );
};
