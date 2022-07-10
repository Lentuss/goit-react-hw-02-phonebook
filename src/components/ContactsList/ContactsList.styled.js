import styled from 'styled-components';
import theme from 'constants/theme';

const { colors } = theme;

export const Contacts = styled.div`
  background-image: linear-gradient(
    to bottom,
    ${colors.mainGrey} 50%,
    ${colors.dark}
  );
  padding: 0 20px 20px;
  cursor: default;
`;

export const ListTitle = styled.h2`
  margin: 0 0 30px;
  color: ${colors.accent};
  text-shadow: 3px 3px 3px ${colors.mainGrey}, 5px 5px 5px ${colors.textGrey};
  font-size: 32px;
`;

export const List = styled.ul`
  color: ${colors.textGrey};
`;

export const Contact = styled.li`
  list-style: square;
  display: flex;
  text-align: start;

  margin-bottom: 7px;
`;
export const Marker = styled.span`
  margin-right: 10px;
  color: ${colors.secondAccent};
`;
export const ContactName = styled.span`
  display: inline-flex;
  margin-right: 15px;

  font-weight: bold;
`;

export const ContactNumber = styled.span`
  color: ${colors.white};

  font-style: italic;
`;

export const DeleteButton = styled.span`
  align-self: flex-end;
  margin-left: auto;
  padding: 5px;

  background-color: ${colors.textGrey};
  color: ${colors.mainGrey};
  font-size: 12px;
  border-radius: 5px;
  border: 1px solid ${colors.mainGrey};

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
