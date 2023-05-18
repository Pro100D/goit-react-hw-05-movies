const SearchForm = ({ onSubmit }) => {
  return (
    <form
      onSubmit={evt => {
        evt.preventDefault();

        onSubmit(evt.target.elements.query.value);

        evt.target.reset();
      }}
    >
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
