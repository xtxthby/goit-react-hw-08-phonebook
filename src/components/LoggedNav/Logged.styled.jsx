import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LoggedList = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-left: auto;
`;
export const LoggedItem = styled.li``;
export const LoggedLink = styled(NavLink)`
  display: block;
  font-weight: 600;
  font-size: 18px;

  padding: 22px 28px;

  color: #ffffff;
  background-color: #7ca78c;

  border-radius: 8px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #000000;
    background-color:  #fabb18;
  }
`;