import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 85% auto;
  }
  grid-gap: 16px;
  box-sizing: border-box;
  margin: 32px 0;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #b660cd;
  color: #161319;
`;

export const Btn = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #b660cd;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: #784b84;
  }
`;
