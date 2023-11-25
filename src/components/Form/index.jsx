import * as Styled from "./styled";

const Form = ({ label, btnText, ...restProps }) => {
  return (
    <Styled.Wrapper>
      {label && <label>{label}</label>}
      <Styled.Input {...restProps} />
      <Styled.Btn type="submit">{btnText}</Styled.Btn>
    </Styled.Wrapper>
  );
};

export default Form;
