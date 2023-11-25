import { useEffect, useState } from "react";
import * as Styled from "./styled";
import { Delete } from "../../icons";

const ErrorSnackBar = ({ hasError, errorMsg, show, setShow }) => {
  useEffect(() => {
    if (!hasError) return;
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasError]);

  return (
    <Styled.SnackbarContainer open={show}>
      {errorMsg}
      <Styled.CloseButton onClick={() => setShow(false)}>
        <Delete height="0.8rem" />
      </Styled.CloseButton>
    </Styled.SnackbarContainer>
  );
};

export default ErrorSnackBar;
