import {useState} from "react";
import {
  SearchContainer,
  SearchIcon,
  SearchIconContainer,
  SearchInput,
} from "./searchBar.style";

export default function SearchBar(props) {
  const {onSearch} = props;

  const [id, setId] = useState("");

  function changeHandler(e) {
    e.preventDefault();
    let input = e.target.value;

    setId(input);
  }

  return (
    <SearchContainer>
      <SearchInput
        type="search"
        placeholder="Search character"
        value={id}
        onChange={changeHandler}
      />
      <SearchIconContainer>
        <SearchIcon onClick={() => onSearch(id)} />
      </SearchIconContainer>
    </SearchContainer>
  );
}
