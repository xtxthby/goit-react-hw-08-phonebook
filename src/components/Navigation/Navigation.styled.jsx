import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Logo = styled(NavLink)`
  font-style: normal;
  font-weight: 800;
  font-size: 36px;

  margin-right: 114px;

  color: #7ca78c;


  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #fabb18;
  }
`;

export const MainNav = styled.nav``;
export const MainNavList = styled.ul``;
export const MainNavItem = styled.li``;
export const MainNavLink = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  padding: 22px 28px;
  list-style: none;

  color: #fff;
  background-color: #7ca78c;
  border-radius: 8px;

  :hover,
  :focus {
    font-weight: 600;

    color: #000;
    background-color:  #fabb18;
  }
`;

