import React from "react";
import { Heading } from "../components/commons/heading";
import { Moebel } from "../components/moebel/Moebel";

export const Step4Page: React.FC = () => {
  return (
    <>
      <Heading label="Umzugskartons" subLabel="Alle in der Wohnung" />

      <Moebel />
    </>
  );
};
