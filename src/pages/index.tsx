import React from "react";
import { Route, Routes } from "react-router-dom";
import { Redirect } from "./IndexPage";
import { Step1Customer } from "./Step1Customer";
import { Step2Auszug } from "./Step2Auszug";
import { Step3Einzug } from "./Step3Einzug";
import { Step4Mobiliar } from "./Step4Mobiliar";
import { Step5Verpackung } from "./Step5Verpackung";
import { Step6Page } from "./Step6Page";

export const AppPages: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Redirect />} />
      <Route path="1" element={<Step1Customer />} />
      <Route path="2" element={<Step2Auszug />} />
      <Route path="3" element={<Step3Einzug />} />
      <Route path="4" element={<Step4Mobiliar />} />
      <Route path="5" element={<Step5Verpackung />} />
      <Route path="6" element={<Step6Page />} />
    </Routes>
  );
};
