import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  margin: 24px 0;
  align-items: center;
  grid-gap: 16px;
`;

export const Text = styled.span`
  color: #b660cd;
`;

export const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 46px;
  height: 20px;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #b660cd;
  }

  &:focus + span {
    box-shadow: 0 0 1px #b660cd;
  }
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #bab3c3;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: ${(props) => (props.isChecked ? "calc(100% - 20px)" : "4px")};
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
