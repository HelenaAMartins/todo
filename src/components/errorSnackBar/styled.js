import styled from "styled-components";

export const SnackbarContainer = styled.div`
  position: absolute;
  transform: ${({ open }) =>
    open ? "translate(-50%, -5px)" : "translate(-50%, -150%)"};
  left: 50%;
  background-color: #f44336;
  color: #fff;
  padding: 15px;
  border-radius: 4px;
  transition: all 0.5s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  z-index: 2;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;
