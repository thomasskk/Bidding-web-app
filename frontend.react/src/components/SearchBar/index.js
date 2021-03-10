import { useState, useEffect, useRef} from "react";
import {
  Search,
  Container,
  SearchItem,
  SearchButton,
  Separator,
  Category,
  MenuCategory
} from "./style";
import {  MenuButton } from "../Navbar/style";
import AnimLoad from "../../utils/AnimLoad";
import SearchJson from "./img/search.json";
import { ClickOutsideListener } from "../../utils/ClickOutsideListener";
import dataJson from './data.json'



function SearchBar() {
  const SearchContainer = useRef(null);
  const [SearchAnim, setSearchAnim] = useState(null);

  useEffect(() => {
    AnimLoad(setSearchAnim, SearchContainer, SearchJson, 1, 20);
  }, []);

  const menuRef = useRef();
  const onClick = () => setIsActive(!isActive);
  const [isActive, setIsActive] = ClickOutsideListener(menuRef, false);

  const [dataState, updateDataState] = useState();

  useEffect( () => {
    async function fetchData() {
      var data = dataJson.map(category => <MenuButton key={category.id}>{category.label}</MenuButton>)
      updateDataState(data)
    }
    isActive && fetchData();
  }, [isActive])

  return (
    <Container>
      <Search>
        <SearchItem>
          <div>
            <input type="text" placeholder="Que cherchez vous ?" />
          </div>
        </SearchItem>
        <Separator />
        <Category onClick={onClick}>
          <label htmlFor="">Catégorie : Toutes</label>
          <MenuCategory className={`${isActive ? "active" : "inactive"}`} ref={menuRef}>
            {dataState}
          </MenuCategory>
          <SearchButton
            ref={SearchContainer}
            onClick={() => SearchAnim.playSegments([0, 21], true)}
          />
        </Category>
      </Search>
    </Container>
  );
}
export default SearchBar;
