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
import ClickOutsideListener from "../../utils/ClickOutsideListener";
import shortid from "shortid";

function SearchBar() {
  const isMenuRender = useRef(false);

  const SearchContainer = useRef(null);
  const [SearchAnim, setSearchAnim] = useState(null);

  useEffect(() => {
    AnimLoad(setSearchAnim, SearchContainer, SearchJson, 1);
  }, []);

  const [dropDownOn, setDropDownOn] = useState(false);

  const menuRef = useRef();
  ClickOutsideListener(menuRef, () => {
    if (dropDownOn) {
      console.log("dfd");
      isMenuRender.current = false;
      setDropDownOn(!dropDownOn);
    }
  });

  // onclick element => open dropdown menu
  function onClick() {
    isMenuRender.current = true;
    if (!dropDownOn) {
      setDropDownOn(!dropDownOn);
    }
  }

  return (
    <Container>
      <Search>
        <SearchItem>
          <div>
            <input type="text" placeholder="Que cherchez vous ?" />
          </div>
        </SearchItem>
        <Category
          onClick={() => {
            onClick();
          }}
        >    
    
          <div>
            <label htmlFor="">Catégorie : Toutes</label>
            {isMenuRender.current && (
              <Menu key={shortid.generate()} display={dropDownOn} ref={menuRef} style={{top: "130px", right:"36%" }}>
                <MenuButton>Log in</MenuButton>
                <MenuButton>Sign up</MenuButton>
              </Menu>
            )}
          </div>
        </Category>
      </Search>
    </Container>
  );
}
export default SearchBar;
