import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieListStyled = styled.ul`
  margin: 0;
  padding: 0;

  margin-left: 30px;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;

  font-size: 20px;

  color: #000000;

  &:hover {
    color: #b564e7;
  }
`;
