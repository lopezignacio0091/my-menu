import React, { useCallback } from "react";
import BasicIcon from "../../../../components/BasicIcon/BasicIcon";
import ToggleSwitch from "../../../../components/ToggleSwitch/ToggleSwitch";
import { Table, Thead, TH, Tbody ,StarContainer } from "./styles";

export const TableView = () => {
  const INACTIVE_COLOR = "#E9DBCB";
  const ACTIVE_COLOR = "#FFD19A";
  const recipes = [
    { id: 1, name: "Melodia de bayas mixtas", score: 3, cooked: true },
    { id: 2, name: "Sopa tailandesa", score: 2, cooked: false },
    { id: 3, name: "Berenjena especiada crujiente", score: 4, cooked: true },
    { id: 4, name: "Sopa de calabaza", score: 3, cooked: true },
    { id: 5, name: "Berenjena especiada crujiente", score: 4, cooked: true },
    { id: 6, name: "Sopa de calabaza", score: 3, cooked: true },
    { id: 7, name: "Berenjena especiada crujiente", score: 4, cooked: true },
  ];

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
            return <BasicIcon name="star" color={handleColor(index,value)} />;
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
      {recipes.map((el) => (
        <Tbody key={el?.id}>
          <td>{el?.name}</td>
          <td>{handleRating(5,el?.score)}</td>
          <td>{handleToggleSwitch(el?.cooked)}</td>
        </Tbody>
      ))}
    </Table>
  );
};
