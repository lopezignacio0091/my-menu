import React, { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Collapsible from "../../components/Collapsible/Collapsible";
import { myOrderelector } from "../../reducers/order/selectors";
import { Product } from "../../reducers/order/types";
import { actions as orderActions } from "../../reducers/order/actions";
import {
  ButtonContainer,
  CardTotal,
  Container,
  ContainerTotal,
  Content,
  ContentOrder,
  ContentTotal,
  Result,
  Title,
  TitleOne,
} from "./styles";
import { userSelector } from "../../reducers/login/selectors";

const Order = () => {
  const [current, setCurrent] = useState(-1);
  const myOrders = useSelector(myOrderelector);
  const USER = useSelector(userSelector);
  const dispatch = useDispatch();

  const onItemClicked = (index: number) => {
    setCurrent((prev) => (prev === index ? -1 : index));
  };

  const handleTotal = useMemo(
    () =>
      myOrders.reduce((prev: number, current: any) => prev + current.price, 0),
    [myOrders]
  );

  const handleOrder = useCallback(() => {
    dispatch(
      orderActions.orderRequest({
        id: USER?.idMesa,
        name:USER?.name,
        order: {
          products: myOrders,
          date: new Date().toString(),
        },
        status: "Abierta",
      })
    );
  }, [USER, dispatch, myOrders]);

  return (
    <>
      {!myOrders.length ? (
        <h1 style={{ textAlign: "center" }}>
          No hay pedidos por favor ingrese uno
        </h1>
      ) : (
        <Container>
          <TitleOne>Mi pedido</TitleOne>
          <Content>
            <ContentOrder>
              {myOrders.map((elem: Product, index: number) => (
                <React.Fragment key={index}>
                  <Collapsible
                    open={current === index}
                    onClick={() => onItemClicked(index)}
                  >
                    <div>
                      <h3 style={{ margin: 0 }}>{elem.name}</h3>
                    </div>
                    <div>
                      <p style={{ margin: 8 }}>{elem.price}</p>
                    </div>
                  </Collapsible>
                </React.Fragment>
              ))}
            </ContentOrder>
            <CardTotal>
              <ContainerTotal>
                <Title>Total pedido</Title>
                <ContentTotal>
                  {myOrders.map((elem: Product) => (
                    <p style={{ margin: 2 }}>
                      <li>
                        <strong>{`${elem.name}`}</strong>
                        {` - $${elem.price}`}
                      </li>
                    </p>
                  ))}
                  <Result>{`$${handleTotal}`}</Result>
                </ContentTotal>
              </ContainerTotal>
              <ButtonContainer>
                <Button
                  type="button"
                  hierarchy="primary"
                  label="Ingresar pedido"
                  fullWidth
                  onClick={handleOrder}
                />
              </ButtonContainer>
            </CardTotal>
          </Content>
        </Container>
      )}
    </>
  );
};

export default Order;
