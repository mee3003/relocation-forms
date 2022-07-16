import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Stepper } from "./components/stepper";
import { PageRoot } from "./pages/PageRoot";
import { Step1Page } from "./pages/Step1Page";
import { Step2Page } from "./pages/Step2Page";
import { Step3Page } from "./pages/Step3Page";
import { Step4Page } from "./pages/Step4Page";
import { Step5Page } from "./pages/Step5Page";
import { Step6Page } from "./pages/Step6Page";

export const AppRoutes: React.FC = () => {
  return (
    <PageRoot>
      <HashRouter>
        <Routes>
          <Route path="1" element={<Step1Page />} />
          <Route path="2" element={<Step2Page />} />
          <Route path="3" element={<Step3Page />} />
          <Route path="4" element={<Step4Page />} />
          <Route path="5" element={<Step5Page />} />
          <Route path="6" element={<Step6Page />} />
        </Routes>
        <Stepper />
      </HashRouter>
    </PageRoot>
  );
};