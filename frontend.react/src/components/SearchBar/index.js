import { Search, Container, SearchItem, Separator } from "./style";
import { useDispatch } from "react-redux";
import CategoryButton from './CategoryButton'

export default function SearchBar() {
  const dispatch = useDispatch();

  const OnChangeInputSearch = (e) => {
    e.persist();
    dispatch({
      type: "SET_SEARCH_NAME",
      payload: e.target.value,
    });
  };

  return (
    <Container>
      <Search>
        <SearchItem>
          <div>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => OnChangeInputSearch(e)}
            />
          </div>
        </SearchItem>
        <Separator />
        <CategoryButton />
      </Search>
    </Container>
  );
}
