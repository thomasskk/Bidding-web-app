import { useState, useEffect, useRef } from "react";
import {
  Search,
  Container,
  SearchItem,
  SearchButton,
  Separator,
  Category,
  MenuCategory,
} from "./style";
import { MenuButton } from "../Navbar/style";
import AnimLoad from "../../utils/AnimLoad";
import searchJson from "./img/search.json";
import { ClickOutsideListener } from "../../utils/ClickOutsideListener";
import axios from "axios";

function SearchBar() {
  const searchContainer = useRef(null);
  const [searchAnim, setSearchAnim] = useState(null);

  useEffect(() => {
    AnimLoad(setSearchAnim, searchContainer, searchJson, 1, 20);
  }, []);

  const menuRef = useRef();
  const [isActive, setIsActive] = ClickOutsideListener(menuRef, false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    isActive && (async () => setCategory((await axios("http://localhost:8080/category")).data))()
  }, [isActive]);

  const returnCategory = () => {
    return category.map(category => 
        <MenuButton key={category.categoryId}>
          {category.name}
        </MenuButton>
    )
  }
  
  return (
    <>
    <Container>
      <Search>
        <SearchItem>
          <div>
            <input type="text" placeholder="Search" />
          </div>
        </SearchItem>
        <Separator />
        <Category onClick={() => setIsActive(!isActive)}>
          <label >Category : All</label>
          <MenuCategory
            className={`${isActive ? "active" : "inactive"}`}
            ref={menuRef}
          >
            {returnCategory()}
          </MenuCategory>
          <SearchButton
            ref={searchContainer}
            onClick={() => searchAnim.playSegments([0, 21], true)}
          />
        </Category>
      </Search>
    </Container>
    </>
  );
}
export default SearchBar;
