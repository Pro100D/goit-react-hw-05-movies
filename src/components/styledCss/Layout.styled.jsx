import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LayoutNav = styled.nav`
  padding: 25px 15px;

  background-color: #b564e7;

  margin-bottom: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: #ffffff;

  font-size: 22px;

  text-decoration: none;
  font-weight: 700;

  margin-right: 20px;

  &.active {
    color: #72fa8d;
  }
`;
