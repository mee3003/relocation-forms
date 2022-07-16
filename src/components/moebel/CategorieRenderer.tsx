import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import itemsReducer from "../../store/itemsReducer";
import { Item } from "../../types";
import { Heading } from "../commons/heading";
import { ItemRenderer } from "./ItemRenderer";

const Root = styled.div`
  width: 100%;
`;

const Items = styled.div`
  padding: 40px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

const Wrapper = styled.div``;

interface Props {
  categorie: string;
  categorieDescription?: string;
  id: number;
}

export const CategorieRenderer: React.FC<Props> = ({ categorie, categorieDescription, id }) => {
  const allItems = useSelector<AppState, Item[]>((state) => state.appItems.items);

  const filtered = allItems.filter((item) => item.categoryRefs?.findIndex((c) => c.id == String(id)) > -1);

  filtered.sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <Root>
      <Heading label={categorie} subLabel={categorieDescription} />
      <Wrapper>
        <Items>
          {filtered.map((i) => (
            <ItemRenderer key={i.name} item={i} colli={0} />
          ))}
        </Items>
      </Wrapper>
    </Root>
  );
};
