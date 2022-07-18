import { useNavigate } from "react-router-dom";

import React, { useEffect } from "react";

export const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("1");
  }, []);

  return <></>;
};
