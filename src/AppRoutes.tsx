import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Stepper } from "./components/stepper";
import { PageRoot } from "./pages/PageRoot";
import { Step1Customer } from "./pages/Step1Customer";
import { Step2Auszug } from "./pages/Step2Auszug";
import { Step3Einzug } from "./pages/Step3Einzug";
import { Step4Mobiliar } from "./pages/Step4Mobiliar";
import { Step5Verpackung } from "./pages/Step5Verpackung";
import { Step6Page } from "./pages/Step6Page";

export const AppRoutes: React.FC = () => {
  return (
    <PageRoot>
      <HashRouter>
        <Routes>
          <Route path="1" element={<Step1Customer />} />
          <Route path="2" element={<Step2Auszug />} />
          <Route path="3" element={<Step3Einzug />} />
          <Route path="4" element={<Step4Mobiliar />} />
          <Route path="5" element={<Step5Verpackung />} />
          <Route path="6" element={<Step6Page />} />
        </Routes>
        <Stepper />
      </HashRouter>
    </PageRoot>
  );
};
