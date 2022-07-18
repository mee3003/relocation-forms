import React from "react";
import { DatePicker } from "../commons/date-picker";

import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { setOrderProps } from "../../store/orderReducer";
import { Order } from "../../types";
import { YesNo } from "../commons/yes-no/YesNo";

const Wrapper = styled.div`
  padding: 60px 0;
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const DateWidget: React.FC = () => {
  const dispatch = useDispatch();

  const order = useSelector<AppState, Order>((state) => state.order);

  const onDateFixChange = (value: boolean) => {
    dispatch(setOrderProps({ prop: "isDateFix", value }));
  };

  const onDateChange = (value: any, prop: "date" | "date_from" | "date_to") => {
    dispatch(setOrderProps({ prop, value: Date.parse(value) }));
  };

  return (
    <div>
      <YesNo
        label="Steht Ihr Umzugsdatum fest?"
        value={order.isDateFix}
        onChange={onDateFixChange}
      />

      {order.isDateFix === true ? (
        <Wrapper>
          <DatePicker
            value={order.date}
            onChange={(date) => onDateChange(date, "date")}
            label="Umzugsdatum"
          />
        </Wrapper>
      ) : (
        <Wrapper>
          <DatePicker
            value={order.date_from}
            onChange={(date) => onDateChange(date, "date_from")}
            label="Frühestes Umzugsdatum"
          />
          <DatePicker
            minDate={order.date_from}
            value={order.date_to}
            onChange={(date) => onDateChange(date, "date_to")}
            label="Spätestes Umzugsdatum"
          />
        </Wrapper>
      )}
    </div>
  );
};
