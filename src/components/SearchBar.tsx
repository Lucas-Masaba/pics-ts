interface SearchBarProps {
  onSubmit: (term: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit("cars");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" />
      </form>
    </div>
  );
};

export default SearchBar;
