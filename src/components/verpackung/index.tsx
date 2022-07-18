import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { setShowVerpackung } from "../../store/preferencesReducer";
import { Service } from "../../types";
import { YesNo } from "../commons/yes-no/YesNo";

export const Verpackung = () => {
  const dispatch = useDispatch();

  const showVerpackung = useSelector<AppState, boolean>(
    (state) => state.preferences.showVerpackung
  );

  const services = useSelector<AppState, Service[]>((state) => state.appServices.services);
  const verpackung = useMemo(() => {
    return services.filter((s) => s.tag === "Packmaterial");
  }, [dispatch, services]);

  function onShowChange(show: boolean) {
    dispatch(setShowVerpackung({ show }));
  }

  return (
    <VerpackungRenderer onShowChange={onShowChange} show={showVerpackung} verpackung={verpackung} />
  );
};

interface Props {
  show: boolean;
  verpackung: Service[];
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

const VerpackungsItem: React.FC<{ v: Service }> = ({ v }) => {
  return <div>{v.name}</div>;
};
