import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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

export const Title = styled.h5`
  font-size: 22px;
  line-height: 24px;
  color: white;
  font-weight: 800;
  margin: 0 0 8px;
  text-align: start;
  font-family: "SoDo Sans,Helvetica,Arial,sans-serif";
`;

export const Link = styled.a`
  font-size: 16px;
  line-height: 20px;
  color: white;
  font-weight: 500;
  text-align: start;
  margin: 0 0 4px;
  font-family: "SoDo Sans,Helvetica,Arial,sans-serif";
`;
