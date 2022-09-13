import React, { useCallback } from "react";
import ToggleSwitch from "../../../../components/ToggleSwitch/ToggleSwitch";
import { Table, Thead, TH, Tbody } from "./styles";
import { TableViewProps } from "./types";
import { Irecipes } from "../../../../reducers/recipes/types";
import StarC  from "../Start/StarC";

export const TableView: React.FC<TableViewProps> = ({
  recipes,
  onFilter,
  onView,
}) => {
  const handleFilter = useCallback(
    (value: boolean) => onFilter(value),
    [onFilter]
  );

  const handleClick = useCallback((id: number) => () => onView(id), [onView]);

  const handleToggleSwitch = useCallback(
    (elem: boolean) => {
      return <ToggleSwitch value={elem} onChange={handleFilter} />;
    },
    [handleFilter]
  );

  return (
    <Table>
      <Thead>
        <TH>Nombre de la receta</TH>
        <TH>Reseñas</TH>
        <TH>Cocinado antes</TH>
      </Thead>
      {recipes?.map((el: Irecipes) => (
        <Tbody key={el?.id}>
          <td onClick={handleClick(el?.id)}>{el?.name}</td>
          <td>
            <StarC count={5} value={el?.score} />
          </td>
          <td>{handleToggleSwitch(el?.cooked)}</td>
        </Tbody>
      ))}
    </Table>
  );
};
