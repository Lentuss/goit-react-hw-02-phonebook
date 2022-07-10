import styled from 'styled-components';
import theme from 'constants/theme';

const { colors } = theme;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  padding: 20px;

  background-image: linear-gradient(
    to bottom,
    ${colors.dark} 20%,
    ${colors.mainGrey}
  );
  color: #c5c6c7;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
`;

export const LabelTitle = styled.span`
  color: ${colors.secondAccent};
  margin-right: 20px;
`;

export const FormInput = styled.input`
  box-sizing: border-box;
  width: 420px;
  padding: 10px;
  border-radius: 5px;
`;

export const AddButton = styled.button`
  display: block;
  width: 180px;

  margin: 20px auto 10px;
  padding: 10px;

  background-color: ${colors.textGrey};

  color: ${colors.mainGrey};
  border-radius: 10px;
  box-shadow: -2px -2px 5px ${colors.dark};

  font-size: 18px;
  font-weight: bold;

  cursor: pointer;

  transition: background-color 250ms linear, box-shadow 250ms linear;

  &:hover,
  &:focus {
    background-color: ${colors.secondAccent};
  }
  &:active {
    box-shadow: 2px 2px 5px ${colors.dark};
  }
`;
