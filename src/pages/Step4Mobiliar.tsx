import React from "react";
import { Heading } from "../components/commons/heading";
import { Moebel } from "../components/moebel/Moebel";
import { Volume } from "../components/volume/Volume";

export const Step4Mobiliar: React.FC = () => {
  return (
    <>
      <Heading label="Umzugskartons" subLabel="Alle in der Wohnung" />

      <Moebel />

      <Volume />
    </>
  );
};
