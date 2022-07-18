import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import { Category } from "../../types";
import { CategorieRenderer } from "./CategorieRenderer";

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const Moebel: React.FC = () => {
  const categories =
    useSelector<AppState, Category[]>((state) => state.appCategories.categories) || [];
  const AllCategories = categories.map((cat) => (
    <CategorieRenderer id={cat.id} key={cat.name} categorie={cat.name} />
  ));

  return <Root>{AllCategories}</Root>;
};
