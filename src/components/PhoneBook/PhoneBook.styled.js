import styled from 'styled-components';
import theme from 'constants/theme';

const { colors } = theme;

export const BookContainer = styled.div`
  display: block;
  width: 550px;
  margin: 20px auto;
  padding-top: 20px;

  text-align: center;

  background-color: ${colors.dark};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 10px black;
`;

export const Title = styled.h1`
  margin: 0 0 20px;
  cursor: default;

  color: ${colors.accent};
  text-shadow: 3px 3px 3px ${colors.mainGrey}, 5px 5px 5px ${colors.textGrey};
  font-size: 46px;
  font-weight: bold;
`;
