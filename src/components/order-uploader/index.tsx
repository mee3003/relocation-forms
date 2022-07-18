import React, { useState } from "react";
import styled from "@emotion/styled";
import SendIcon from "@mui/icons-material/Send";
import { Box, Button, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import { Order } from "../../types";
import { green } from "@mui/material/colors";
import CheckIcon from "@mui/icons-material/Check";

export const OrderUploader = () => {
  const order = useSelector<AppState, Order>((state) => state.order);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  async function uploadOrder() {
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 4000);
  }

  function onSendClick() {
    console.log(order);
    setLoading(true);
    uploadOrder();
  }

  return <OrderUploaderRenderer onSendClick={onSendClick} loading={loading} success={success} />;
};

const Root = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

interface Props {
  success: boolean;
  loading: boolean;
  onSendClick(): void;
}

const OrderUploaderRenderer: React.FC<Props> = ({ loading, onSendClick, success }) => {
  return (
    <Root>
      <Box sx={{ m: 1, position: "relative" }}>
        <Button
          color={success ? "success" : "primary"}
          onClick={onSendClick}
          disabled={loading}
          variant="contained"
          endIcon={success ? <CheckIcon /> : <SendIcon />}
        >
          Absenden
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px",
            }}
          />
        )}
      </Box>
    </Root>
  );
};
