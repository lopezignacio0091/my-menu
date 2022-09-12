import React, { useCallback } from "react";
import BasicIcon from "../../../../components/BasicIcon/BasicIcon";
import ToggleSwitch from "../../../../components/ToggleSwitch/ToggleSwitch";
import { Table, Thead, TH, Tbody ,StarContainer } from "./styles";
import { TableViewProps } from "./types";
import { Irecipes } from '../../../../reducers/recipes/types';

export const TableView :React.FC<TableViewProps> = ({recipes}) => {
  const INACTIVE_COLOR = "#E9DBCB";
  const ACTIVE_COLOR = "#FFD19A";

  const handleStars = useCallback(
    (count: number) => Array.from({ length: count }, () => "🟊"),
    []
  );
  const handleColor = useCallback((index: number, value: number) : string =>
    index < value ? ACTIVE_COLOR : INACTIVE_COLOR
  ,[]);

  const handleToggleSwitch = useCallback((elem : boolean)=>{
    return(
            <ToggleSwitch value={elem} />
    )
  },[])

  const handleRating = useCallback(
    (count: number, value: number) => {
      return (
        <StarContainer>
          {handleStars(count).map((s, index) => {
            return <BasicIcon key={index} name="star" color={handleColor(index,value)} />;
          })}
        </StarContainer>
      );
    },
    [handleColor, handleStars]
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
          <td>{el?.name}</td>
          <td>{handleRating(5,el?.score)}</td>
          <td>{handleToggleSwitch(el?.cooked)}</td>
        </Tbody>
      ))}
    </Table>
  );
};
