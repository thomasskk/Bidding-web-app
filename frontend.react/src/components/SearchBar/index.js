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
import ClickOutsideListener from "../../utils/ClickOutsideListener";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function SearchBar() {
  const searchContainer = useRef(null);
  const categoryRef = useRef("All");
  const menuRef = useRef();
  const [searchAnim, setSearchAnim] = useState(null);
  const [isActive, setIsActive] = ClickOutsideListener(menuRef, false);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    AnimLoad(setSearchAnim, searchContainer, searchJson, 1, 20);
  }, []);

  useEffect(() => {
    isActive &&
      (async () =>
        setCategory((await axios("http://localhost:8080/category")).data))();
  }, [isActive]);

  const returnCategory = () => {
    return category.map((category) => (
      <MenuButton key={category.categoryId} onClick={(e) => onClickCategory(e)}>
        {category.name}
      </MenuButton>
    ));
  };

  const onClickCategory = (e) => {
    categoryRef.current = e.target.value;
    dispatch({
      type: "SET_SEARCH_CATEGORY",
      payload: e.target.value,
    });
  };

  const handleChange = (e) => {
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
              onChange={(e) => handleChange(e)}
            />
          </div>
        </SearchItem>
        <Separator />
        <Category onClick={() => setIsActive(!isActive)}>
          <label>Category : {categoryRef.current}</label>
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
  );
}
