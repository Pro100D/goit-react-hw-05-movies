import styled from '@emotion/styled';

export const InputSearchForm = styled.input`
  border-radius: 6px;
  border-color: #b564e7;
  outline: none;

  padding: 10px 15px;
  width: 350px;

  font-size: 20px;

  margin-right: 20px;

  &:focus {
    border-color: #92ce9e;
  }
`;

export const ButtonSearch = styled.button`
  font-size: 20px;

  border-radius: 6px;
  border-color: #b564e7;

  background-color: #d4b2e9;

  &:hover {
    background-color: #92ce9e;
    border-color: #92ce9e;
  }

  padding: 10px 20px;
`;

export const SearchFormStyled = styled.form`
  display: flex;
  justify-content: center;
`;
