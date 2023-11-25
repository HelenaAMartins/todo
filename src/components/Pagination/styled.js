import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  background-color: ${(props) => (props.active ? "#b660cd" : "#9e8ab2")};
  color: ${(props) => (props.active ? "#fff" : "#007BFF")};
  border: 1px solid #b660cd;
  border-radius: 25px;
  padding: 8px 16px;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: ${(props) => (props.active ? "#784b84" : "#71637f")};
  }
`;
