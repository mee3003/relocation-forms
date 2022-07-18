import styled from "@emotion/styled";
import Button from "@mui/material/Button/Button";
import MobileStepper from "@mui/material/MobileStepper";
import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const Root = styled.div`
  padding: 1rem 0;
`;

const routes = ["1", "2", "3", "4", "5", "6"].map((r) => "/" + r);

export const MyStepper: React.FC = () => {
  const { pathname } = useLocation();
  const {
    state: { errors = [] },
    dispatch,
  } = useAppContext();

  const navigate = useNavigate();

  const backDisabled = useCallback((cur: string) => {
    return cur === routes[0];
  }, []);

  const isLastStep = useCallback((cur: string) => {
    return cur === routes[routes.length - 1];
  }, []);

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
    if (errors.length > 0) {
      console.log(errors);
      dispatch({ type: "SET_VALIDATION_MODE", payload: { mode: "ValidateAndShow" } });
    } else {
      dispatch({ type: "SET_VALIDATION_MODE", payload: { mode: "ValidateAndHide" } });
      const index = getPathIndex();

      if (index < routes.length) {
        const nextPathname = routes[index + 1];
        navigate(nextPathname);
        window.scrollTo({ top: 0 });
      }
    }
  };

  const step = Number(pathname.replace("/", "")) - 1;

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
        nextButton={
          <Button variant="outlined" disabled={isLastStep(pathname)} onClick={forward}>
            Weiter
          </Button>
        }
      />
    </Root>
  );
};