import styled from "@emotion/styled";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { setShowVerpackung } from "../../store/preferencesReducer";
import { Packing } from "../../types";
import { YesNo } from "../commons/yes-no/YesNo";

export const Verpackung = () => {
  const dispatch = useDispatch();

  const showVerpackung = useSelector<AppState, boolean>(
    (state) => state.preferences.showVerpackung
  );

  const verpackung = useSelector<AppState, Packing[]>((state) => state.appPackings.packings);

  function onShowChange(show: boolean) {
    dispatch(setShowVerpackung({ show }));
  }

  return (
    <VerpackungRenderer onShowChange={onShowChange} show={showVerpackung} verpackung={verpackung} />
  );
};

interface Props {
  show: boolean;
  verpackung: Packing[];
  onShowChange(show: boolean): void;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const VerpackungRenderer: React.FC<Props> = ({ onShowChange, show, verpackung }) => {
  return (
    <Root>
      <YesNo
        label="Möchten Sie Verpackungmaterialien erwerben?"
        value={show}
        onChange={onShowChange}
      />
      {show && (
        <Items>
          {verpackung.map((v) => {
            return <VerpackungsItem v={v} key={v.id} />;
          })}
        </Items>
      )}
    </Root>
  );
};

const VerpackungsItem: React.FC<{ v: Packing }> = ({ v }) => {
  return <div>{v.name}</div>;
};
