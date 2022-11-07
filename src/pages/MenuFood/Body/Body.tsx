import React, { useCallback, useState } from "react";
import CardMenu from "./components/CardMenu";
import { Container, ContainerCard, Title } from "./styles";
import { actions as orderActions } from "../../../reducers/order/actions";
import { useDispatch } from "react-redux";
import Snackbar from "../../../components/SnackBar/Snackbar";

const Body = () => {
  const [view, setView] = useState(false);
  const dispatch = useDispatch();
  const cards = [
    {
      id: 1,
      link: "https://cdn.shopify.com/s/files/1/0557/1965/7630/products/7-min_9fc89350-7a36-4414-9f9b-0d9306e5e43c_510X510_crop_center.jpg?v=1617712137",
      name: "Double Chocolate Chip",
      price: 200,
      type: "3",
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecatiritatis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecatialias a, veritatis."
    },
    {
      id: 2,
      link: "https://cdn.shopify.com/s/files/1/0557/1965/7630/products/9-min_a8455c65-98ca-41cf-81ac-2c5d6cddff67_510X510_crop_center.jpg?v=1617712214",
      name: "Cafe ",
      price: 500,
      type: "3",
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecatiritatis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecatialias a, veritatis."

    },
    {
      id: 3,
      link: "https://cdn.shopify.com/s/files/1/0557/1965/7630/products/7-min_9fc89350-7a36-4414-9f9b-0d9306e5e43c_510X510_crop_center.jpg?v=1617712137",
      name: "Cafe Latte",
      price: 700,
      type: "3",
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecatiritatis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecatialias a, veritatis."
    },
    {
      id: 4,
      link: "https://cdn.shopify.com/s/files/1/0557/1965/7630/products/7-min_9fc89350-7a36-4414-9f9b-0d9306e5e43c_510X510_crop_center.jpg?v=1617712137",
      name: "Cafe Capuccino",
      price: 600,
      type: "3",
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecatiritatis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecatialias a, veritatis."
    },
    {
      id: 5,
      link: "https://cdn.shopify.com/s/files/1/0557/1965/7630/products/7-min_9fc89350-7a36-4414-9f9b-0d9306e5e43c_510X510_crop_center.jpg?v=1617712137",
      name: "Double Chocolate Chip",
      price: 450,
      type: "3",
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecatiritatis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecatialias a, veritatis."
    },
    {
      id: 6,
      link: "https://cdn.shopify.com/s/files/1/0557/1965/7630/products/7-min_9fc89350-7a36-4414-9f9b-0d9306e5e43c_510X510_crop_center.jpg?v=1617712137",
      name: "Double Chocolate Chip",
      price: 500,
      type: "3",
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecatiritatis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecatialias a, veritatis."
    },
  ];

  const handleAddOrder = useCallback(
    (menu: any) => {
      dispatch(orderActions.addOrder(menu));
      setView(true);
    },
    [dispatch]
  );

  const handleClose = useCallback(()=> setView(false),[])
  return (
    <>
      <Container>
        <ContainerCard>
          {cards.map((elem) => (
            <CardMenu card={elem} addCard={handleAddOrder} />
          ))}
        </ContainerCard>
      </Container>
      <Snackbar open={view} message="Se agrego correctamente" status="SUCCES" onClose={handleClose}/>
    </>
  );
};

export default Body;
