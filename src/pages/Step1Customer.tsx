import React from "react";
import { Customer } from "../components/customer";
import { DateWidget } from "../components/date/DateWidget";

export const Step1Customer: React.FC = () => {
  return (
    <>
      <Customer />
      <DateWidget />
    </>
  );
};
