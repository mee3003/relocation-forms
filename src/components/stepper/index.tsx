import styled from "@emotion/styled";
import Button from "@mui/material/Button/Button";
import MobileStepper from "@mui/material/MobileStepper";
import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Root = styled.div`
  padding: 1rem 0;
`;

const routes = ["1", "2", "3", "4", "5", "6"].map((r) => "/" + r);

export const Stepper: React.FC = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const backDisabled = useCallback(
    (cur: string) => {
      return cur === routes[0];
    },
    [routes]
  );

  const isLastStep = useCallback(
    (cur: string) => {
      return cur === routes[routes.length - 1];
    },
    [routes]
  );

  const nextDisabled = () => {
    return false;
  };

  const getPathIndex = () => {
    return routes.findIndex((e) => e === pathname);
  };

  const back = () => {
    const index = getPathIndex();
    if (index > 0) {
      const nextPathname = routes[index - 1];
      navigate(nextPathname);
    }
  };

  const forward = () => {
    const index = getPathIndex();
    if (index < routes.length) {
      const nextPathname = routes[index + 1];
      navigate(nextPathname);
    }
  };

  const lastStep = isLastStep(pathname);

  const step = Number(pathname.replace("/", "")) - 1;

  const NextButton = lastStep ? (
    <Button variant="contained">Absenden</Button>
  ) : (
    <Button onClick={forward} disabled={nextDisabled()}>
      Weiter
    </Button>
  );

  return (
    <Root>
      <MobileStepper
        position="static"
        variant="dots"
        steps={routes.length}
        activeStep={step}
        backButton={
          <Button disabled={backDisabled(pathname)} onClick={back}>
            Zurück
          </Button>
        }
        nextButton={NextButton}
      />
    </Root>
  );
};
