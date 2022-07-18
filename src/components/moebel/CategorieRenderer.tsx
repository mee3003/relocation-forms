import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import { Item } from "../../types";
import { Heading } from "../commons/heading";
import { ItemRenderer } from "./ItemRenderer";

const Root = styled.div`
  width: 100%;
`;

export const Items = styled.div`
  padding: 40px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

interface Props {
  categorie: string;
  categorieDescription?: string;
  id: string;
}

export const CategorieRenderer: React.FC<Props> = ({ categorie, categorieDescription, id }) => {
  const allItems = useSelector<AppState, Item[]>((state) => state.appItems.items);

  const filtered = useMemo(() => {
    const filtered = allItems.filter(
      (item) => item.categoryRefs?.findIndex((c) => c.id == id) > -1
    );
    filtered.sort((a, b) => a.sortOrder - b.sortOrder);

    return filtered;
  }, [allItems, id]);

  return (
    <Root>
      <Heading label={categorie} subLabel={categorieDescription} />
      <Items>
        {filtered.map((i) => (
          <ItemRenderer categorie={categorie} key={i.name} item={i} />
        ))}
      </Items>
    </Root>
  );
};
