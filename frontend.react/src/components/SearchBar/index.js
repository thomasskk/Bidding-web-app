import { useState, useEffect, useRef } from "react";
import {
  Search,
  Container,
  SearchItem,
  SearchButton,
  Separator,
  Category,
} from "./style";
import { Menu, MenuButton } from "../Navbar/style";
import AnimLoad from "../../utils/AnimLoad";
import SearchJson from "./img/search.json";
import { ClickOutsideListener } from "../../utils/ClickOutsideListener";

function SearchBar() {
  const SearchContainer = useRef(null);
  const [SearchAnim, setSearchAnim] = useState(null);

  useEffect(() => {
    AnimLoad(setSearchAnim, SearchContainer, SearchJson, 1, 20);
  }, []);

  const menuRef = useRef();
  const onClick = () => setIsActive(!isActive);
  const [isActive, setIsActive] = ClickOutsideListener(menuRef, false);
  
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
          <Menu
            className={`${isActive ? "active" : "inactive"}`}
            ref={menuRef}
            style={{ top: "130px", right: "36%" }}
          >
            <MenuButton>Log in</MenuButton>
            <MenuButton>Sign up</MenuButton>
          </Menu>
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
