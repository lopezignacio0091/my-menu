import React, { useState, useCallback } from "react";
import BasicIcon from "../BasicIcon/BasicIcon";
import {
  CloseContainer,
  Container,
  Content,
  IconContainer,
  MessageContainer,
} from "./styles";
import { SnackBarProps } from "./types";

const Snackbar: React.FC<SnackBarProps> = ({ status, message, onClose, open }) => {


  //   const statusIcon = useMemo(() => {
  //     "SUCCES": "menu",
  //     "WARNING": "search",
  //     "ERROR": "add",
  //   }, []);

  //   const handleIcon = useMemo(() => statusIcon[status], [status, statusIcon]);

  const handleClose = useCallback(() => onClose(), [onClose]);
  return (
    <>
      {open && (
        <Container>
          <Content status={status}>
            <IconContainer>
              <BasicIcon name="badge-check" color="#ffff"/>
            </IconContainer>
            <MessageContainer>{message}</MessageContainer>
            <CloseContainer>
              <BasicIcon name="x" onClick={handleClose} color="#ffff"/>
            </CloseContainer>
          </Content>
        </Container>
      )}
    </>
  );
};

export default Snackbar;
