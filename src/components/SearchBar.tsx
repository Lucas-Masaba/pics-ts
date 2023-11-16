import "./SearchBar.css";
import { useState } from "react";

interface SearchBarProps {
  onSubmit: (term: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} type="text" />
      </form>
    </div>
  );
};

export default SearchBar;
