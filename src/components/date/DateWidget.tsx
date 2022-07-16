import React from "react";
import { DatePicker } from "../commons/date-picker";

import styled from "@emotion/styled";
import { useOrderContext } from "../../context/OrderContext";
import { YesNo } from "../commons/yes-no/YesNo";

const Wrapper = styled.div`
  padding: 60px 0;
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const DateWidget: React.FC = () => {
  const { state: order, dispatch } = useOrderContext();

  const onDateFixChange = (value: boolean) => {
    dispatch({ type: "SET_ORDER_PROP", payload: { prop: "isDateFix", value } });
  };

  const onDateChange = (newDate: any, prop: "date" | "date_from" | "date_to") => {
    dispatch({ type: "SET_ORDER_PROP", payload: { prop, value: Date.parse(newDate) } });
  };

  return (
    <div>
      <YesNo label="Steht Ihr Umzugsdatum fest?" value={order.isDateFix} onChange={onDateFixChange} />

      {order.isDateFix === true ? (
        <Wrapper>
          <DatePicker value={order.date} onChange={(date) => onDateChange(date, "date")} label="Umzugsdatum" />
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
