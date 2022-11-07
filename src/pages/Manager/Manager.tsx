import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Container, Title } from "./styles";
import CardFilters from "./components/CardFilters/CardFilters";
import Total from "../../assets/total.svg";
import Mesa from "../../assets/restaurant.svg";
import Body from "./components/Body/Body";
import { loadingSelector, tableSelector } from "../../reducers/order/selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actions as orderActions } from "../../reducers/order/actions";
import LoadingDots from "../../components/Loading/Loading";
const Manager = () => {
  const tables = useSelector(tableSelector);
  const loading = useSelector(loadingSelector);
  const dispatch = useDispatch();
  const [tablesView, setTablesView] = useState(tables);

  useEffect(() => {
    dispatch(orderActions.tablesRequest());
  }, [dispatch]);

  useEffect(() => {
  setTablesView(tables);
  }, [tables]);


  const handleStatus = useCallback(
    (status: string) =>
      tables.filter((elem: any) => elem.status === status).length,
    [tables]
  );

  const handleFilter = useCallback(
    (name: string) =>
      setTablesView(tables.filter((elem: any) => elem.status === name)),
    [tables]
  );
  const handleCards = useMemo(
    () => [
      {
        url: Total,
        count: handleStatus("Abierta"),
        title: "Abiertos",
        filter: "Abierta",
      },
      {
        url: Mesa,
        count: handleStatus("Cerrada"),
        title: "Cerrados",
        filter: "Cerrada",
      },
      {
        url: Total,
        count: handleStatus("Reservada"),
        title: "Reservadas",
        filter: "Reservada",
      },
    ],
    [handleStatus]
  );

  if (loading) return <LoadingDots />;
  return (
    <Container>
      <Title>Gerente</Title>
      <CardFilters cards={handleCards} handleAction={handleFilter} />

      <Body tables={tablesView} />
    </Container>
  );
};

export default Manager;
