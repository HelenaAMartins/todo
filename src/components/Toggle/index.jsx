import * as Styled from "./styled";

const Toggle = ({ isChecked, onChange, text, rightText }) => {
  return (
    <Styled.Wrapper>
      <Styled.Text>{text}</Styled.Text>
      <Styled.ToggleContainer>
        <Styled.ToggleInput
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
        />
        <Styled.ToggleSlider isChecked={isChecked} />
      </Styled.ToggleContainer>
      <Styled.Text>{rightText}</Styled.Text>
    </Styled.Wrapper>
  );
};

export default Toggle;
