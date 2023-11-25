import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-gap: 12px;
  padding: 0;
`;

export const IconsWrapper = styled.div`
  display: flex;
  grid-gap: 12px;
`;

export const Button = styled.button`
  background-color: transparent;
  cursor: ${({ disabled }) => (disabled ? "initial" : "pointer")};
  border: 0;
  color: ${({ disabled }) => (disabled ? "#9e8ab2" : "#71637f")};
  opacity: ${({ disabled }) => (disabled ? "0.7" : "1")};
  transition: all 0.5s;

  &:hover {
    color: ${({ disabled }) => (disabled ? "#9e8ab2" : "#443b4c")};
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: ${({ isChecked }) => (isChecked ? "#f9f3ff" : "#f1e2ff")};
  padding: 20px 12px;
  border-radius: 8px;
  list-style: none;
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};
`;

export const EditInput = styled.input`
  background-color: #f1e2ff;
  border: 0;

  &:focus,
  &:focus-visible {
    border: 0;
    outline: 0;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const Text = styled.div`
  width: 75%;
  word-wrap: break-word;

  @media screen and (min-width: 768px) {
    width: 100%;
    word-wrap: unset;
  }
`;
