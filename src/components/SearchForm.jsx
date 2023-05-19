import {
  InputSearchForm,
  ButtonSearch,
  SearchFormStyled,
} from './styledCss/SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  return (
    <SearchFormStyled
      onSubmit={evt => {
        evt.preventDefault();

        onSubmit(evt.target.elements.query.value);

        evt.target.reset();
      }}
    >
      <InputSearchForm type="text" name="query" />
      <ButtonSearch type="submit">Search</ButtonSearch>
    </SearchFormStyled>
  );
};
export default SearchForm;
