import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieDetailsLinkStyled = styled(Link)`
  font-size: 23px;

  text-decoration: none;

  color: #000000;

  margin-bottom: 15px;
  display: block;
  &:hover {
    color: #b564e7;
  }
`;

export const FlexBlockMovieDetails = styled.div`
  display: flex;
`;

export const GanresBlock = styled.div`
  display: flex;

  gap: 10px;
  font-size: 18px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;

  font-size: 20px;

  color: #000000;

  &:hover {
    color: #b564e7;
  }
`;
