import styled from 'styled-components';
import theme from 'constants/theme';

const { colors } = theme;

export const FilterLabel = styled.label`
  display: block;
  font-style: italic;
  color: ${colors.textGrey};
`;

export const FilterInput = styled.input`
  display: block;
  border-radius: 5px;
  padding: 5px;
  margin: 10px auto;
`;
