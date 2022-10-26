import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 3px 3px rgb(0 0 0 / 10%);
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
`;

export const Menu = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 80px;
  width: 100%;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 0 20px;
  margin-left: 20px;
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover{
    text-decoration: underline;
  }
`;

export const Title = styled.a`
  cursor: pointer;
  color: #e29a5b;
  font-family: "Bradley Hand";
  font-size: 34px;
  font-weight: 900;
  margin: 0 20px;
  text-decoration: underline;
`;


export const LabelItem = styled.a`
  color: #1e3832;
  font-family: "SoDo Sans,Helvetica,Arial,sans-serif";
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
`;

export const Login = styled.div`
  cursor: pointer;
  margin-right: 20px;
  flex-direction: row;
  display: flex;
  a {
    margin-left: 4px;
  }
`;
